('#board').svg_datalayer({
    title: 'Tool Inventory',
    actions: {
        dataLoad: 'actions/load_data.php',
        dataSave: 'actions/save_data.php'
    },
    pages:{
        board1 :{
            title:'Toolboard 1',
            svg_file: 'toolboard.svg',
            click_appends_css: 'missing'
        }
    }
});