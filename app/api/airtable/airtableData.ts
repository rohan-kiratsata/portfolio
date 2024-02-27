import base from "./airtableBase";

export const fetchAirtableData = async (
  callback: any
  // offset: number,
  // limit: number
) => {
  base("TSI Data")
    .select({
      fields: ["Name", "Description", "URL", "Date", "Category"],
      // maxRecords: limit,
      view: "Grid view",
      // offset: offset,
    })
    .eachPage(
      function page(records, fetchNextPage) {
        const data = records.map((record) => ({
          name: record.get("Name"),
          description: record.get("Description"),
          url: record.get("URL"),
          createdAt: record.get("Date"),
          category: record.get("Category"),
        }));

        callback(data);
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
};
