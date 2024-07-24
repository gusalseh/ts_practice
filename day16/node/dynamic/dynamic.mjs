const a = true;

if (a) {
  const a1 = await import("../ESmodules/func.mjs");
  console.log(a1);
  const a2 = await import("../ESmodules/var.mjs");
  console.log(a2);
}

console.log("성공");
