<script>
    import Blueprint from "../components/composed/blueprint/blueprint.svelte";
    import CommandBar from "../components/composed/commands/commandBar.svelte";
    import FileExplorer from "../components/composed/files/fileExplorer.svelte";
</script>

<svelte:head>
    <title>Blueprint</title>
</svelte:head>

<CommandBar />
<FileExplorer />
<Blueprint />