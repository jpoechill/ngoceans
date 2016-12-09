// App for installing, utilizing IndexedDB (with Dexie.js)
// Define database
var db = new Dexie("oceansdb-v1");
db.version(1).stores({
    oceans: 'name'
});

// Open db
db.open().catch(function (e) {
    console.log("Open failed: " + e);
});
//
function addNewOcean (thisOceanName, thisOceanJson) {
    db.oceans.put(
        {
          name: thisOceanName,
          seas: thisOceanJson,
          numOfSeas: thisOceanJson.seas.length
        }
    );
}
