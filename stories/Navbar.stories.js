import * as React                          from "react";
import {MemoryRouter}                      from "react-router-dom";
import { Navbar } from "../src/components/Navbar/Navbar";
import {AppShell} from "@mantine/core";

export default {
    title: 'Navbar',
    component: Navbar,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

export const Default = {
    render: (args) => <div className="h-full w-full overscroll-none font-proxima">
        <MemoryRouter>
            <AppShell
                padding="md"
                navbar={<Navbar{...args} active={args.active || "Home"}/>}
            >
                {/* Your application here */}
            </AppShell>
        </MemoryRouter>
    </div>,
};
