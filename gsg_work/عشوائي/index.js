const subjects = ["القط", "الكلب", "الولد", "البنت"];
const verbs = ["يأكل", "يشرب", "يلعب", "ينام"];
const objects = ["التفاحة", "الماء", "الكرة", "السرير"];

function generateSentence() {
  const subject = subjects[Math.floor(Math.random() * subjects.length)];
  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const object = objects[Math.floor(Math.random() * objects.length)];
  const sentence = `${subject} ${verb} ${object}.`;
  document.getElementById("sentence").textContent = sentence;
}
