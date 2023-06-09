import * as React from "react";
import { Container, Stack, Tabs, Text, Title } from "@mantine/core";
import { AssignmentData } from "../../components/assignment/data";
import { AssignmentSummary } from "../../components/assignment/tab/AssignmentSummary";
import { AssignmentBreakdown } from "../../components/assignment/tab/AssignmentBreakdown";
import { IconChartArrows, IconListNumbers } from "@tabler/icons-react";

/**
 * AssignmentPageProps
 */
export type AssignmentPageProps = AssignmentData & {};

/**
 * AssignmentPage
 * @param props
 * @constructor
 */
export function AssignmentPage(props: AssignmentPageProps) {
  return <Container size="lg" pb="xl">
    <Stack spacing={10}>
      <Title color="dark.4">{props.name}</Title>
      <Tabs defaultValue="summary">
        <Tabs.List>
          <Tabs.Tab icon={<IconChartArrows/>} value="summary">
            <Text px={15} py={10}>
              Summary
            </Text>
          </Tabs.Tab>
          <Tabs.Tab icon={<IconListNumbers/>} value="breakdown">
            <Text px={15} py={10}>
              Breakdown
            </Text>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="summary" pt="xs">
          <AssignmentSummary {...props}/>
        </Tabs.Panel>

        <Tabs.Panel value="breakdown" pt="xs">
          <AssignmentBreakdown {...props}/>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  </Container>
}
