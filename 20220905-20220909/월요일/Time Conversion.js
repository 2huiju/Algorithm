function timeConversion(s) {
  // Write your code here
  let dd = s.slice(0, -2).split(":");

  if (s.includes("PM")) {
    dd[0] !== "12" && (dd[0] = Number(dd[0]) + 12);
  } else {
    dd[0] === "12" && (dd[0] = "00");
  }

  return dd.join(":");
}
