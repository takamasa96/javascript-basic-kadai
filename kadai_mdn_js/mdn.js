const today = new Date();

const formatter = new Intl.DateTimeFormat("ja-JP", {
  year: "numeric",
  month: "long",
  day: "numeric"
});

console.log(formatter.format(today));
