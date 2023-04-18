import * as React     from 'react';
import AvatarInit     from "avatar-initials";
import {
    Avatar,
    Menu,
    createStyles,
    Text,
    Button,
}             from '@mantine/core';
import {
    IconLogout, IconSettings, IconCertificate2,
    IconUserCircle, IconBatteryEco, IconChecklist,
    IconAdjustmentsDollar, IconChalkboard, IconBuildingCommunity
}             from "@tabler/icons-react";
import {Link} from "react-router-dom";

const useStyles = createStyles((theme) => ({
    user: {
        cursor: "pointer",
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.blue[6],
        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.blue[7],
        },
    },
}));

/**
 * UserButtonProps
 */
export interface UserButtonProps  {
    name?: string;
    email?: string;
    image?: string;
    icon?: React.ReactNode;
}

/**
 * UserButton
 * @param props
 * @constructor
 */
export function UserButton(props: UserButtonProps) {
    const { classes } = useStyles();
    if(!props.name || !props.email){
        return <Button leftIcon={<IconUserCircle size={16} />} variant="outline">Sign in</Button>
    }

    const image = getImageOrBuildFromName(props.image, props.name)

    return <Menu
        transitionProps={{ transition: 'pop' }}
        withArrow
        position="bottom-end"
        withinPortal
    >
        <Menu.Target>
            <Avatar size={30} className={classes.user} src={image} radius="xl" />
        </Menu.Target>
        <Menu.Dropdown>
            <div style={{ minWidth: '12rem', padding: '0.5rem', flex: 1 }}>
                <Text size="sm" weight={500}>
                    {props.name}
                </Text>

                <Text color="dimmed" size="xs">
                    {props.email}
                </Text>
            </div>
            <Menu.Divider/>
            <Menu.Item<typeof Link>
                component={Link} to="/my/profile"
                icon={<IconCertificate2 size="1rem" stroke={1.5} />}>My profile</Menu.Item>
            <Menu.Item<typeof Link>
                component={Link} to="/my/work"
                icon={<IconChecklist size="1rem" stroke={1.5} />}>My work</Menu.Item>
            <Menu.Item<typeof Link>
                component={Link} to="/my/classes"
                icon={<IconChalkboard size="1rem" stroke={1.5} />}>My classes</Menu.Item>
            <Menu.Item<typeof Link>
                component={Link} to="/my/organizations"
                icon={<IconBuildingCommunity size="1rem" stroke={1.5} />}>My organizations</Menu.Item>
            <Menu.Item<typeof Link>
                component={Link} to="/my/settings"
                icon={<IconSettings size="1rem" stroke={1.5} />}>My settings</Menu.Item>
            <Menu.Divider/>
            <Menu.Item<typeof Link>
                component={Link} to="/upgrade"
                icon={<IconAdjustmentsDollar size="1rem" stroke={1.5} />}>Upgrade</Menu.Item>
            <Menu.Item<typeof Link>
                component={Link} to="/log-service"
                icon={<IconBatteryEco size="1rem" stroke={1.5} />}>Log service</Menu.Item>
            <Menu.Item<typeof Link>
                component={Link} to="/sign-out"
                icon={<IconLogout size="1rem" stroke={1.5} />}>Sign out</Menu.Item>
        </Menu.Dropdown>
    </Menu>
}

function getImageOrBuildFromName(url?: string, name?: string){
    if(url || !name){
        return url
    }

    let initials = name.split(/[ -]/).map((n) => n.charAt(0)).join('');
    return AvatarInit.initialAvatar({
        background: 'transparent',
        color: '#fff',
        fontFamily: "'Lato', 'Lato-Regular', 'Helvetica Neue'",
        fontSize: 24,
        fontWeight: 350,
        size: 60,
        initials: initials,
    })


}