import { writable, derived } from 'svelte/store';

export const activeFileIndex = writable(0);
export const files = writable(
    [
        {
            id: "Uuid1",
            meta:
            {
                name: "FileName",
                description: "This is a file description test."
            },
            content:
                [
                    {
                        type: "Section",
                        content:
                            [
                                {
                                    type: "Header 1",
                                    content: "Header 1"
                                },
                                {
                                    type: "Paragraph",
                                    content: "This is a test paragraph to try and show off how this will render when there is a decent chunk of text inside of the block."
                                },
                            ]
                    },
                    {
                        type: "Section",
                        content:
                            [
                                {
                                    type: "Header 1",
                                    content: "Header 1"
                                },
                                {
                                    type: "Paragraph",
                                    content: "This is a test paragraph to try and show off how this will render when there is a decent chunk of text inside of the block."
                                },
                            ]
                    },
                    {
                        type: "Section (1/2 Size)",
                        content:
                            [
                                {
                                    type: "Header 1",
                                    content: "Header 1"
                                },
                                {
                                    type: "Paragraph",
                                    content: "This is a test paragraph to try and show off how this will render when there is a decent chunk of text inside of the block."
                                },
                            ]
                    },
                    {
                        type: "Section (1/2 Size)",
                        content:
                            [
                                {
                                    type: "Header 1",
                                    content: "Header 1"
                                },
                                {
                                    type: "Paragraph",
                                    content: "This is a test paragraph to try and show off how this will render when there is a decent chunk of text inside of the block."
                                },
                            ]
                    },
                ]
        },
    ]
);
export const activeFile = derived(
    [activeFileIndex, files],
    ([$activeFileIndex, $files]) => {
        return $files[$activeFileIndex];
    }
);