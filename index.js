const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
];

function superbowlWin(record) {
  const rec = record.find((rec) => (rec.result === "W" ? rec : undefined));
  if (rec) return rec.year;

  return rec;
}

console.log(superbowlWin(record));
