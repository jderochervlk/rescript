// Generated by ReScript, PLEASE EDIT WITH CARE


console.log("---");

console.log("Intl.PluralRules");

new Intl.PluralRules();

new Intl.PluralRules([
  "en-US",
  "en-GB"
]);

let _formatter = new Intl.PluralRules(undefined, {
  type: "ordinal",
  minimumSignificantDigits: 3,
  maximumSignificantDigits: 5
});

let formatter = new Intl.PluralRules(["en-US"], {
  type: "ordinal",
  minimumSignificantDigits: 3,
  maximumSignificantDigits: 5
});

console.log(formatter.resolvedOptions());

console.log(formatter.select(2.0));

console.log(formatter.select(2));

export {
  _formatter,
  formatter,
}
/*  Not a pure module */
