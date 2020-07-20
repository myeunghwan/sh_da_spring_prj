
const COL_NAMES = {
    host:   'DB_HOST',
    id:     'DB_USER_ID',
    passwd: 'DB_USER_PASSWD',
    csvPath:    'CSV_PATH',
    tname:  'DB_TABLE_NAME',
    schema: 'SCHEMA',
    ignoreLines:'HEADER_LINES',
    binPath:'MARIADB_PATH'
}

export const genBatFile = (aRecord) => {
    let text =  `"${aRecord[COL_NAMES.binPath]}\\mysql" -h ${aRecord[COL_NAMES.host]} -u ${aRecord[COL_NAMES.id]} --password=${aRecord[COL_NAMES.passwd]} ${aRecord[COL_NAMES.schema]}  < ${aRecord[COL_NAMES.tname]}.sql`
    fs.writeFileSync( `./out/${aRecord[COL_NAMES.tname]}.bat` , text)
}

export const genSqlFile = (aRecord) => {
    let text =  `
      LOAD DATA LOCAL INFILE '${aRecord[COL_NAMES.csvPath]}'
      REPLACE
      INTO TABLE \`${aRecord[COL_NAMES.schema]}\`.\`${aRecord[COL_NAMES.tname]}\`
      COLUMNS TERMINATED BY ','
      ENCLOSED BY '"'
      LINES TERMINATED BY '\\n'
      IGNORE 1 LINES;
    `
    fs.writeFileSync( `./out/${aRecord[COL_NAMES.tname]}.sql` , text)
}
