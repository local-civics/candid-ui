import * as React from "react";
import { Container, Title, createStyles, rem, Accordion, useMantineTheme, MantineTheme, Text } from "@mantine/core";

import { IconCircleNumber1, IconCircleNumber2, IconCircleNumber3 } from "@tabler/icons-react";

const MAX_ITEMS_PREVIEW = 3;

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
  card: {
    maxWidth: "22rem",
    border: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]}`,
  },
}));

/**
 * PostPreviewProps
 */
export type PostPreviewProps = {
  previewTitle?: string;
  previewItems: { title: string }[];
  previewItemCount: number;
  previewItemLabelPrefix?: string;
  previewDescription?: string;
};

/**
 * PostPreview
 * @param props
 * @constructor
 */
export function PostPreview(props: PostPreviewProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const title = props.previewTitle || "Preview";
  const itemLabelPrefix = props.previewItemLabelPrefix || "Question";
  const maxPreview = Math.min(MAX_ITEMS_PREVIEW, props.previewItems.length);
  const itemProvider = [
    ...props.previewItems.slice(0, maxPreview),
    ...[...Array(props.previewItemCount).keys()].slice(maxPreview).map((i) => {
      return {
        title: "",
      };
    }),
  ];

  const items = itemProvider.map((item, i) => (
    <Accordion.Item value={i.toString()}>
      <Accordion.Control icon={accordianIcon(theme, i)} disabled={i >= maxPreview}>
        {itemLabelPrefix} #{i + 1}
      </Accordion.Control>
      <Accordion.Panel>{item.title}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Container fluid p={25} mx={0} className={classes.wrapper}>
      <Title className={classes.title}>{title}</Title>
      {!!props.previewDescription && <Text size="md"> {props.previewDescription} </Text>}
      <Container size="sm" px={0} mx={0}>
        <Accordion>{items}</Accordion>
      </Container>
    </Container>
  );
}

function accordianIcon(theme: MantineTheme, i: number) {
  switch (i) {
    case 0:
      return <IconCircleNumber1 color={theme.colors.dark[4]} />;
    case 1:
      return <IconCircleNumber2 color={theme.colors.dark[4]} />;
    case 2:
      return <IconCircleNumber3 color={theme.colors.dark[4]} />;
    default:
      return null;
  }
}
