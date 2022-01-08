rs.initiate(
  {
    _id: "shardrs",
    members: [
      { _id : 0, host : "localhost:27001" },
      { _id : 1, host : "localhost:27002" },
    ]
  }
);