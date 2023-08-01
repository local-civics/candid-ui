import * as React from "react";
import { AssignmentModel } from "../../../models/assignment";
import { Card, Stack, Title, Text, ScrollArea } from "@mantine/core";
import { AxisOptions, Chart } from "react-charts";

/**
 * AssignmentSummaryProps
 */
export type AssignmentSummaryProps = AssignmentModel & {}

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

  const summary: Record<string, {
    index: number
    name: string
    submissions?: string[][]
    options?: string[]
  }> = {}

  props.questions?.forEach(( v, i) => {
    if(!v.itemId || !v.title){
      return
    }

    summary[v.itemId] = {
      index: i,
      name: v.title,
      submissions: [],
      options: v.options,
    }
  })

  props.breakdown?.forEach(b => {
    const breakdownAnswers = b.answers || {}
    Object.keys(breakdownAnswers).forEach(k => {
      !!breakdownAnswers[k].responses && k in summary && summary[k].submissions?.push(breakdownAnswers[k].responses || [])
    })
  })

  const summaryValues = Object.values(summary)
  summaryValues.sort((a, b) => a.index < b.index ? -1 : 1)

  const rows = summaryValues.map((row, i) => {
    if(!!row.options?.length){
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

      return <Card key={i} withBorder p="xl" radius="md">
        <Stack spacing={4}>
          <Title size="lg">{row.name}</Title>
          <Text size="sm">{row.submissions?.length || 0} submissions</Text>

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

    return <Card key={i} withBorder p="xl" radius="md">
      <Stack spacing={4}>
        <Title size="lg">{row.name}</Title>
        <Text size="sm">{row.submissions?.length || 0} submissions</Text>

        <ScrollArea.Autosize mah={600}>
          <Stack spacing={4}>
            {
              row.submissions?.map((s, i) => {
                const submissionText = s.join("\n")
                return <Card key={i} p={5} radius={0} bg="gray.0">
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