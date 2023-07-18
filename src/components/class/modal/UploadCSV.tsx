import * as React from "react";
import { modals } from "@mantine/modals";
import { Button, Group, Text } from "@mantine/core";
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { IconCloudUpload, IconDownload, IconX } from "@tabler/icons-react";
import { ParseResult, parse, unparse } from "papaparse";
import { ClassMemberData } from "../../../models/class";
import { useClassStyles } from "../styles";

/**
 * UploadCSVProps
 */
export type UploadCSVProps = {
  onUploadCSV?: (newStudents: ClassMemberData[]) => void;
  onDownloadTemplate?: () => void;
}

/**
 * UploadCSV
 * @param props
 * @constructor
 */
export function UploadCSV(props: UploadCSVProps){
  const { classes, theme } = useClassStyles();
  const openRef = React.useRef<() => void>(null);
  const [loading, setLoading] = React.useState(false)
  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    setLoading(true)
    acceptedFiles.forEach((file) => {
      parse(file, {
        download: true,
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        worker: true,
        complete: function(results: ParseResult<ClassMemberData>) {
          const data = results.data
          data.length > 0 && props.onUploadCSV && props.onUploadCSV(data)
          setLoading(false)
          modals.closeAll()
        }
      })
    })

  }, [])

  return (
    <div className={classes.addStudentsWrapper}>
      <Button mb={10} maw="max-content" variant="subtle" leftIcon={<IconDownload />}
              onClick={() => {
                const csv = unparse([
                  ['name', 'email'],
                  ['John Doe', 'example@mail.com']
                ])
                const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                const filename = "localcivics-template.csv"
                const link = document.createElement("a");
                if (link.download !== undefined) { // feature detection
                  // Browsers that support HTML5 download attribute
                  const url = URL.createObjectURL(blob);
                  link.setAttribute("href", url);
                  link.setAttribute("download", filename);
                  link.style.visibility = 'hidden';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }
                props.onDownloadTemplate && props.onDownloadTemplate()
              }}>
        Download template
      </Button>

      <Dropzone
        loading={loading}
        openRef={openRef}
        onDrop={onDrop}
        className={classes.dropzone}
        radius="md"
        accept={[MIME_TYPES.csv]}
        maxSize={5 * 1024 ** 2}
      >
        <div style={{ pointerEvents: 'none' }}>
          <Group position="center">
            <Dropzone.Accept>
              <IconDownload size={50} color={theme.colors[theme.primaryColor][6]} stroke={1.5} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size={50} color={theme.colors.red[6]} stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload
                size={50}
                color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black}
                stroke={1.5}
              />
            </Dropzone.Idle>
          </Group>

          <Text align="center" weight={700} size="lg" mt="xl">
            <Dropzone.Accept>Drop files here</Dropzone.Accept>
            <Dropzone.Reject>Csv file less than 5mb</Dropzone.Reject>
            <Dropzone.Idle>Upload csv</Dropzone.Idle>
          </Text>
          <Text align="center" size="sm" mt="xs" color="dimmed">
            Drag&apos;n&apos;drop files here to upload. We can accept only <i>.csv</i> files that
            are less than 5mb in size.
          </Text>
        </div>
      </Dropzone>

      <Button className={classes.selectFileBtnControl} size="md" radius="xl" onClick={() => openRef.current?.()}>
        Select file
      </Button>
    </div>
  );
}