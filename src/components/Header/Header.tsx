import * as React                   from 'react';
import {
    Header as MantineHeader,
    TextInput,
    ActionIcon,
    Flex,
    useMantineTheme,
    createStyles,
    Group,
    Center,
    Avatar, Image, Burger
}                                   from '@mantine/core'
import {IconSearch, IconArrowRight} from '@tabler/icons-react'
import {useNavigate}                                                                  from "react-router-dom";
import {UserButton, UserButtonProps}                                                  from "../UserButton/UserButton";

const useStyles = createStyles((theme) => {
    return {

    }
})

/**
 * HeaderProps
 */
export type HeaderProps = UserButtonProps & {
    menu: boolean
    onMenuClick: () => void;
}

/**
 * Header
 * @param props
 * @constructor
 */
export function Header(props: HeaderProps){
    const theme = useMantineTheme();
    const navigate = useNavigate()
    const [query, setQuery] = React.useState("")
    const search = () => {
        navigate(query ? `/search?q=${encodeURIComponent(query)}` : `/search`)
    }

    return <MantineHeader height={60} px="xl" py="xs">
        <Group position="apart">
            <Group position="apart">
                <Burger opened={false} onClick={props.onMenuClick} size="sm" />
                <Center>
                    <Avatar color="blue" radius="sm">
                        <div style={{ width: 15, marginLeft: 'auto', marginRight: 'auto' }}>
                            <Image fit="contain" src="https://cdn.localcivics.io/brand/l.png"/>
                        </div>
                    </Avatar>
                </Center>
            </Group>
            <Flex w={{base: 200, sm: "auto"}} pl={{sm: 300}} mr="auto" gap="sm" justify="center" align="center">
                <TextInput
                    miw={{sm: 450}}
                    icon={<IconSearch size="1.1rem" stroke={1.5} />}
                    radius="xl"
                    size="md"
                    onChange={(e) => setQuery(e.target.value)}
                    rightSection={
                        <ActionIcon onClick={search} size={32} radius="xl" color={theme.primaryColor} variant="filled">
                            <IconArrowRight size="1.1rem" stroke={1.5} />
                        </ActionIcon>
                    }
                    placeholder="Search"
                    rightSectionWidth={42}
                    {...props}
                />
            </Flex>
            <UserButton {...props} />
        </Group>
    </MantineHeader>
}