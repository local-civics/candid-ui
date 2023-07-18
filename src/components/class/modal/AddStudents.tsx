import * as React from "react";
import { Box, Button, Center, Flex, TextInput, Stack } from "@mantine/core";
import { IconRowInsertBottom, IconGripVertical } from "@tabler/icons-react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ClassMemberData } from "../../../models/class";
import { useForm } from "@mantine/form";
import { modals } from "@mantine/modals";

/**
 * AddStudentsProps
 */
export type AddStudentsProps = {
  onAddStudents?: (newStudents: ClassMemberData[]) => void;
}

/**
 * AddStudents
 * @param props
 * @constructor
 */
export function AddStudents(props: AddStudentsProps){
  const form = useForm<{students: ClassMemberData[]}>({
    initialValues: {
      students: [
        {
          name: '',
          email: '',
          role: 'student',
          avatarURL: '',
          status: 'inactive',
          numberOfBadgesEarned: 0,
          numberOfLessonsCompleted: 0,
          impactStatement: '',
        },
      ],
    },
  });
  
  const fields = form.values.students.map((_, index) => (
    <Draggable key={index} index={index} draggableId={index.toString()}>
      {(provided) => (
        <Flex ref={provided.innerRef} mt="xs" {...provided.draggableProps} gap={5}>
          <Center {...provided.dragHandleProps}>
            <IconGripVertical size="1.2rem" />
          </Center>
          <TextInput placeholder="John Doe" {...form.getInputProps(`students.${index}.name`)} />
          <TextInput
            placeholder="example@mail.com"
            {...form.getInputProps(`students.${index}.email`)}
          />
        </Flex>
      )}
    </Draggable>
  ));

  return (
    <Stack spacing={5}>
      <Button maw="max-content" variant="subtle" leftIcon={<IconRowInsertBottom />}
        onClick={() => form.insertListItem('students', {
          name: '',
          email: '',
          role: 'student',
          avatarURL: '',
          status: 'inactive',
          numberOfBadgesEarned: 0,
          numberOfLessonsCompleted: 0,
          impactStatement: '',
        })}>
        New row
      </Button>
      <Box maw={500} mx="auto">
        <DragDropContext
          onDragEnd={({ destination, source }) =>
            form.reorderListItem('students', { from: source.index, to: destination ? destination.index : source.index })
          }
        >
          <Droppable droppableId="dnd-list" direction="vertical">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {fields}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Box>
      <Button
        mt={20}
        onClick={() => {
          close();
          form.reset();
          props.onAddStudents && props.onAddStudents(form.values.students);
          modals.closeAll()
        }}
      >
        Submit
      </Button>
    </Stack>
  );
}