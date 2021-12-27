import { writable, derived } from 'svelte/store';
import { BlockType } from "$lib/blockTypes";

export const activeFile = writable({
    content: "Initial"
});
export const files = writable(
[
    {
        id: "Uuid1",
        type: BlockType.Root,
        meta:
        {
            name: "FileName",
            description: "This is a file description test."
        },
        content:
        [
            {
                id: "Uuid2",
                type: BlockType.SectionFull,
                content:
                [
                    {
                        id: "Uuid6",
                        type: BlockType.Header1,
                        content: "Header 1"
                    },
                    {
                        id: "Uuid7",
                        type: BlockType.Paragraph,
                        content: "This is a test paragraph to try and show off how this will render when there is a decent chunk of text inside of the block."
                    },
                ]
            },
            {
                id: "Uuid3",
                type: BlockType.SectionFull,
                content:
                [
                    {
                        id: "Uuid8",
                        type: BlockType.Header2,
                        content: "Header 2"
                    },
                    {
                        id: "Uuid9",
                        type: BlockType.Paragraph,
                        content: "This is a test paragraph to try and show off how this will render when there is a decent chunk of text inside of the block."
                    },
                ]
            },
            {
                id: "Uuid4",
                type: BlockType.SectionHalf,
                content:
                [
                    {
                        id: "Uuid10",
                        type: BlockType.Header3,
                        content: "Header 3"
                    },
                    {
                        id: "Uuid11",
                        type: BlockType.Paragraph,
                        content: "This is a test paragraph to try and show off how this will render when there is a decent chunk of text inside of the block."
                    },
                ]
            },
            {
                id: "Uuid5",
                type: BlockType.SectionHalf,
                content:
                [
                    {
                        id: "Uuid12",
                        type: BlockType.Header4,
                        content: "Header 4"
                    },
                    {
                        id: "Uuid13",
                        type: BlockType.Paragraph,
                        content: "This is a test paragraph to try and show off how this will render when there is a decent chunk of text inside of the block."
                    },
                ]
            },
        ]
    },
]
);