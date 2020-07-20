const { GoogleSpreadsheet } = require('google-spreadsheet');
const key='AIzaSyAQ22xH0sr46b5nML33fC1VipkxBxf4is8'

// docId 를 찾는법
//  https://docs.google.com/spreadsheets/d/1U1oYnzfVtUfWavnDZPYXDqjGwydKuFo7UnuLq0o9wVE/edit#gid=0

async function getRows(docId='1U1oYnzfVtUfWavnDZPYXDqjGwydKuFo7UnuLq0o9wVE', sheetIndex=0) {
    const doc = new GoogleSpreadsheet(docId);
    doc.useApiKey(key);
    await doc.loadInfo();

    const loadSheet= doc.sheetsByIndex[sheetIndex];
    const rows = await loadSheet.getRows();
    return rows;
}

module.exports = {
    getRows
}



