let t=document.body.firstElementChild.firstElementChild
console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead)
console.log(t.tHead.firstElementChild)// gives tr
console.log(t.tFoot)
console.log(t.Bodies)
console.log(t.rows[0].rowIndex)//gives tr which is a row  and .rowIndex gives row no ie; ans=0
//tr.cells gives collection of td and th
//td.cellIndex is also there as for rowIndex , gives no of cells inside <tr>
// typedef of document and window is object :))))




