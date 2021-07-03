const cols = [
  { field: "quest_name", headerName: "題目名稱", width: 150 },
  {
    field: "run_time",
    headerName: "執行時間",
    type: "number",
    width: 150,
  },
  {
    field: "status",
    headerName: "題目狀態",
    width: 150,
    align: "right",
  },
  {
    field: "judge",
    headerName: "OJ 名稱",
    width: 200,
    align: "right",
  },
  {
    field: "submit_dt",
    headerName: "submit 時間",
    width: 150,
    align: "right",
    valueFormatter: (params) => {
      let m = new Date(params.row.submit_dt);
      const dateString =
        m.getUTCFullYear() +
        "/" +
        (m.getUTCMonth() + 1) +
        "/" +
        m.getUTCDate() +
        " " +
        m.getUTCHours() +
        ":" +
        m.getUTCMinutes();

      return dateString;
    },
  },
];

export default cols;
