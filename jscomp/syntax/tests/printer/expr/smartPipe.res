let myFunc = (strA, strB) => strA ++ strB

"expr1"->myFunc("expr2")->myFunc("expr3")

"expr1"
->myFunc("expr2")->myFunc("expr3")

"expr1"->myFunc("expr2")
->myFunc("expr3")

"expr1"->myFunc("expr2")
->myFunc("expr3")->myFunc("expr4")

myPromise->Promise.then(v => {
  Js.log(v)
  Promise.resolve(v)
})

myPromise
->Promise.then(v => {
  Js.log(v)
  Promise.resolve(v)
})

let messages = React.useMemo(() =>
  messagesById
  ->StringMap.valuesToArray
  ->Array.filter(ChatMessage.isVisibleInSimpleFilter)
  ->Array.toSorted(ChatMessage.compareByDateAsc)
, [messagesById])

