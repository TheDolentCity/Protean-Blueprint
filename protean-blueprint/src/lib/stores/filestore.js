import { writable, derived } from 'svelte/store';
import { BlockTypes } from "$lib/enums/blockTypes";
import { TextTypes } from '$lib/enums/textTypes';
import { SectionTypes } from '$lib/enums/sectionTypes';
import { TextAlignments } from '$lib/enums/textAlignments';
import { ColumnTypes } from '$lib/enums/columnTypes';

export const activeFile = writable(null);
// export const files = writable(
// 	[
// 		{
// 			id: "Uuid1",
// 			type: BlockTypes.Root,
// 			meta:
// 			{
// 				name: "FileName",
// 				description: "This is a file description test."
// 			},
// 			content:
// 				[
// 					{
// 						id: "Uuid2",
// 						type: BlockTypes.Section,
// 						meta: {
// 							type: SectionTypes.Full
// 						},
// 						content:
// 							[
// 								{
// 									id: "Uuid6",
// 									type: BlockTypes.Text,
// 									meta: {
// 										type: TextTypes.H1,
// 										align: TextAlignments.Left
// 									},
// 									content: "Header 1"
// 								},
// 								{
// 									id: "Uuid7",
// 									type: BlockTypes.Text,
// 									meta: {
// 										type: TextTypes.P,
// 										align: TextAlignments.Left
// 									},
// 									content: "This is a test paragraph to try and show off how this will render when there is a decent chunk of text inside of the block."
// 								},
// 							]
// 					},
// 					{
// 						id: "Uuid3",
// 						type: BlockTypes.Section,
// 						meta: {
// 							type: SectionTypes.Full
// 						},
// 						content:
// 							[
// 								{
// 									id: "Uuid8",
// 									type: BlockTypes.Text,
// 									meta: {
// 										type: TextTypes.H2,
// 										align: TextAlignments.Left
// 									},
// 									content: "Header 2"
// 								},
// 								{
// 									id: "Uuid9",
// 									type: BlockTypes.Text,
// 									meta: {
// 										type: TextTypes.P,
// 										align: TextAlignments.Left
// 									},
// 									content: "This is a test paragraph to try and show off how this will render when there is a decent chunk of text inside of the block."
// 								},
// 							]
// 					},
// 					{
// 						id: "Uuid4",
// 						type: BlockTypes.Section,
// 						meta: {
// 							type: SectionTypes.Half
// 						},
// 						content:
// 							[
// 								{
// 									id: "Uuid10",
// 									type: BlockTypes.Text,
// 									meta: {
// 										type: TextTypes.H3,
// 										align: TextAlignments.Left
// 									},
// 									content: "Header 3"
// 								},
// 								{
// 									id: "Uuid11",
// 									type: BlockTypes.Text,
// 									meta: {
// 										type: TextTypes.P,
// 										align: TextAlignments.Left
// 									},
// 									content: "This is a test paragraph to try and show off how this will render when there is a decent chunk of text inside of the block."
// 								},
// 							]
// 					},
// 					{
// 						id: "Uuid5",
// 						type: BlockTypes.Section,
// 						meta: {
// 							type: SectionTypes.Half
// 						},
// 						content:
// 							[
// 								{
// 									id: "Uuid12",
// 									type: BlockTypes.Text,
// 									meta: {
// 										type: TextTypes.H4,
// 										align: TextAlignments.Left
// 									},
// 									content: "Header 4"
// 								},
// 								{
// 									id: "Uuid13",
// 									type: BlockTypes.Text,
// 									meta: {
// 										type: TextTypes.P,
// 										align: TextAlignments.Left
// 									},
// 									content: "This is a test paragraph to try and show off how this will render when there is a decent chunk of text inside of the block."
// 								},
// 							]
// 					},
// 				]
// 		},
// 	]
// );
export const files = writable(
	[
		{
			id: "Uuid1",
			type: BlockTypes.Root,
			meta:
			{
				name: "FileName",
				description: "This is a file description test."
			},
			content: [
				{
					id: "Uuid6",
					type: BlockTypes.Text,
					meta: {
						type: TextTypes.H1,
						align: TextAlignments.Left,
						columns: ColumnTypes.Full
					},
					content: "Header 1"
				},
				{
					id: "Uuid7",
					type: BlockTypes.Text,
					meta: {
						type: TextTypes.P,
						align: TextAlignments.Left,
						columns: ColumnTypes.Full
					},
					content: "This is a test paragraph to try and show off how this will render when there is a decent chunk of text inside of the block."
				},
				{
					id: "Uuid8",
					type: BlockTypes.Text,
					meta: {
						type: TextTypes.H2,
						align: TextAlignments.Left,
						columns: ColumnTypes.Full
					},
					content: "Header 2"
				},
				{
					id: "Uuid9",
					type: BlockTypes.Text,
					meta: {
						type: TextTypes.P,
						align: TextAlignments.Left,
						columns: ColumnTypes.Full
					},
					content: "This is a test paragraph to try and show off how this will render when there is a decent chunk of text inside of the block."
				},
				{
					id: "Uuid10",
					type: BlockTypes.Text,
					meta: {
						type: TextTypes.H3,
						align: TextAlignments.Left,
						columns: ColumnTypes.Half
					},
					content: "Header 3"
				},
				{
					id: "Uuid11",
					type: BlockTypes.Text,
					meta: {
						type: TextTypes.P,
						align: TextAlignments.Left,
						columns: ColumnTypes.Half
					},
					content: "This is a test paragraph to try and show off how this will render when there is a decent chunk of text inside of the block."
				},
				{
					id: "Uuid12",
					type: BlockTypes.Text,
					meta: {
						type: TextTypes.H4,
						align: TextAlignments.Left,
						columns: ColumnTypes.Half
					},
					content: "Header 4"
				},
				{
					id: "Uuid13",
					type: BlockTypes.Text,
					meta: {
						type: TextTypes.P,
						align: TextAlignments.Left,
						columns: ColumnTypes.Half
					},
					content: "This is a test paragraph to try and show off how this will render when there is a decent chunk of text inside of the block."
				},
			]
		},
	]
);