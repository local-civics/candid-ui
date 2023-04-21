import * as React                   from 'react';
import {
    Header as MantineHeader,
    TextInput,
    ActionIcon,
    Flex,
    useMantineTheme,
    Group,
    Center,
    Avatar, Image, Burger, createStyles
} from '@mantine/core'
import {IconSearch, IconArrowRight} from '@tabler/icons-react'
import {useNavigate}                                                                  from "react-router-dom";
import {AppUserButton, AppUserButtonProps}                                                  from "./AppUserButton";

const useStyles = createStyles((theme) => {
    return {
        search: {
            [theme.fn.smallerThan('sm')]: {
                display: 'none',
            }
        }
    }
})


/**
 * AppHeaderProps
 */
export type AppHeaderProps = AppUserButtonProps & {
    menu: boolean
    onMenuClick: () => void;
}

/**
 * AppHeader
 * @param props
 * @constructor
 */
export function AppHeader(props: AppHeaderProps){
    const theme = useMantineTheme();
    const {classes} = useStyles()
    const navigate = useNavigate()
    const [query, setQuery] = React.useState("")
    const search = () => {
        navigate(query ? `/search?q=${encodeURIComponent(query)}` : `/search`)
    }

    return <MantineHeader height={60} px="xl" py="xs">
        <Group position="apart">
            <Group position="apart" spacing="sm">
                <Burger opened={false} onClick={props.onMenuClick} size="sm" />
                <Center>
                    <Avatar color="blue" radius="sm">
                        <div style={{ width: 15, marginLeft: 'auto', marginRight: 'auto' }}>
                            <Image fit="contain" src="https://cdn.localcivics.io/brand/l.png"/>
                        </div>
                    </Avatar>
                </Center>
            </Group>
            <Flex
                className={classes.search}
                w={{base: 200, sm: "auto"}}
                mx="auto" gap="sm" justify="center" align="center"
            >
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
            <AppUserButton {...props} />
        </Group>
    </MantineHeader>
}