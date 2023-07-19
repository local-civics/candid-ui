import * as React from "react";
import { AssignmentData } from "../../../models/assignment";
import { Card, Stack, Title, Text, ScrollArea } from "@mantine/core";
import { AxisOptions, Chart } from "react-charts";

/**
 * AssignmentSummaryProps
 */
export type AssignmentSummaryProps = AssignmentData & {}

/**
 * AssignmentSummary
 * @param props
 * @constructor
 */
export function AssignmentSummary(props: AssignmentSummaryProps){
  const primaryAxis = React.useMemo<
    AxisOptions<{primary: string, secondary: string}>
  >(
    () => ({
      position: "left",
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<{primary: string, secondary: string}>[]
  >(
    () => [
      {
        position: "bottom",
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  const rows = props.summary?.map((row) => {
    if(row.chart){
      const labelMap: any = {}
      const options = row.options || []
      options.forEach(o => {
        labelMap[o] = 0
      })

      row.submissions?.forEach(s => s.forEach(r => {
        if(r in labelMap){
          labelMap[r] = labelMap[r] ? labelMap[r] + 1 : 1
        }
      }))

      return <Card key={row.name} withBorder p="xl" radius="md">
        <Stack spacing={4}>
          <Title size="lg">{row.name}</Title>
          <Text size="sm">{row.submissionCount || row.submissions?.length} submissions</Text>

          <div style={{ background: "white", height: "300px", width: "100%", position: 'relative' }}>
            <Chart
              options={{
                data: [{
                  label: '',
                  data: options.map(o => {
                    return {
                      primary: truncateWithEllipses(o, 50),
                      secondary: labelMap[o]
                    }
                  }),
                }],
                primaryAxis,
                secondaryAxes,
              }}
            />
          </div>
        </Stack>
      </Card>
    }

    return <Card key={row.name} withBorder p="xl" radius="md">
      <Stack spacing={4}>
        <Title size="lg">{row.name}</Title>
        <Text size="sm">{row.submissionCount || row.submissions?.length} submissions</Text>

        <ScrollArea.Autosize mah={600}>
          <Stack spacing={4}>
            {
              row.submissions?.map(s => {
                const submissionText = s.join("\n")
                return <Card key={submissionText} p={5} radius={0} bg="gray.0">
                  <Text>{submissionText}</Text>
                </Card>
              })
            }
          </Stack>
        </ScrollArea.Autosize>
      </Stack>
    </Card>
  });


  return <Stack py={4} spacing={10} sx={{ minWidth: 700 }}>
    {rows}
  </Stack>
}

const truncateWithEllipses = (text: string, max: number) => text.substring(0,max-1)+(text.length>max?'&hellip;':'')