const matList = [
  "Curl Up",
  "Hundred",
  "Single Leg Circle",
  "Single Leg Stretch",
  "Scissors",
  "Crisscross",
  "Double Leg Stretch",
  "Double Leg Low & Lift",
  "Roll Up",
  "Teaser Prep",
  "Teaser",
  "Shoulder Bridge",
  "Roll Over",
  "Spine Stretch Forward",
  "Spine Roll Back",
  "Spine Lean Back",
  "Roll Down",
  "Rolling Like A Ball",
  "Hip Circles",
  "Spine Twist",
  "Saw",
  "Mermaid with Rotation",
  "Side Bend Mermaid Prep",
  "Side Kick Kneeling",
  "Swimming Prep",
  "Swimming",
  "Side Leg Series (Abduction)",
  "Side Leg Series (Adduction)",
  "Side Leg Series (Knee Open)",
  "Side Leg Series (Side Kick Prep)",
  "Breast Stroke Prep - Hands By Shoulder",
  "Breast Stroke Prep - Hands By Hip",
  "Breast Stroke Prep - Hands By Head",
  "Breast Stroke",
  "Slow Swan",
  "Spinal Release",
  "Single Leg Extension",
  "Double Leg Extension",
  "Hamstring Curl",
  "Heel Squeeze",
  "Leg Full Front Prep",
  "Leg Full Front",
  "Leg Full Up",
  "Push Up",
  "Plank",
];

const reformerList = [
  "Footwork (Heels on Footbar)",
  "Footwork (Wrap Toes on Footbar)",
  "Footwork (Frog Position)",
  "Footwork (Heels Up)",
  "Ankle Exercise",
  "Running",
  "Hip Rolls",
  "Single Leg Footwork (Bicycle)",
  "Single Leg Footwork (Reach Leg)",
  "Single Leg Footwork (Coordination)",
  "Stomach Massage (Round Back)",
  "Stomach Massage (Flat Back)",
  "Stomach Massage (Twist)",
  "Mermaid",
  "Reach & Bend (Parallel)",
  "Reach & Bend (Lateral Rotation)",
  "Reach & Bend (Medial Rotation)",
  "Lower & Lift (Parallel)",
  "Lower & Lift (Lateral Rotation)",
  "Adductor Stretch",
  "Leg Circle",
  "Stag",
  "Short Spine Prep",
  "Short Spine",
  "Long Spine",
  "Mid Back Series (Straight Press Down)",
  "Mid Back Series (Treceps Press Down)",
  "Mid Back Series (Side Press Down)",
  "Mid Back Series (Arm Circle)",
  "Coordination",
  "Back Rowing Series Prep (Round Back)",
  "Back Rowing Series Prep (Flat Back)",
  "Sitting Arm Forward Footbar Series (Straight Forward)",
  "Sitting Arm Forward Footbar Series (Hugging Arm)",
  "Sitting Arm Forward Footbar Series (Salute)",
  "Chest Expansion",
  "Kneeling Arm Forward Footbar Series (Straight Forward)",
  "Kneeling Arm Forward Footbar Series (Biceps Curl)",
  "Kneeling Arm Forward Footbar Series (Teardrop outward/inward)",
  "Knee Stretch (Round Back)",
  "Knee Stretch (Flat Back)",
  "Elephant (Round Back)",
  "Elephant (Flat Back)",
  "Prone Arm Series (Straight Backward)",
  "Prone Arm Series (Straight Sideway)",
  "Prone Arm Series (Triceps)",
  "Back Rowing Series (Round Back)",
  "Back Rowing Series (Flat Back)",
  "Front Rowing Series (Flat Back)",
  "Front Rowing Series (Round Back)",
  "Long Stretch",
  "Turtle (Round Back)",
  "Turtle (Flat Back)",
  "Single Thigh Stretch",
  "Side Split",
];

const cadillacList = [
  "Spread Eagle Prep",
  "Push-thru on Back with Roll Up",
  "Sit up Combo",
  "Teaser",
  "Push-thru on Stomach with Back Extension",
  "Leg Press",
  "Guillotine",
  "Monkey",
  "Push Thru Cat Spine Stretch",
  "Lat Press",
  "Roll Down",
  "Airplain Prep",
  "Breathing",
  "Push-thru with Feet (Double Leg Pump)",
  "Push-thru with Feet (Single Leg)",
  "Push-thru with Feet (Single Leg Pump)",
  "Spread Eagle",
  "Pull Up",
  "Ballet Stretch",
];

const chairList = [
  "Footwork (Heels on Pedal)",
  "Footwork (Frog Position)",
  "Footwork (Heels Up)",
  "Sitting Ankle Exercise",
  "Standing Ankle Exercise",
  "Running",
  "Lying Leg Press",
  "Lying Leg Press with Articulation",
  "Lying Frog Leg Press",
  "AB Press Sitting",
  "Roll Over",
  "Tendon Stretch",
  "Cat Spine Standing Front (Articulation)",
  "Cat Spine Standing Front (AB Press)",
  "Cat Spine Standing Front (Arm Press)",
  "Single Leg Standing (Front)",
  "Single Leg Standing (Side)",
  "Step Up",
  "Spine Press on Chair Prep",
  "Rotation Prone",
  "Slow Swan",
];

const barrelList = [
  "Spine Twist",
  "Round Back",
  "Flat Back",
  "Round Back with Twist",
  "Lean",
  "Tree Prep",
  "Side Bend",
  "Swan",
  "Spinal Extension",
  "Scissors",
  "Bicycle",
  "Leg Lower & Lift",
  "Horse",
  "Prone Exercise Series (Single Leg Extension)",
  "Prone Exercise Series (Double Leg Extension)",
  "Prone Exercise Series (Leg Swimming)",
  "Grasshopper",
  "Ballet Stretch",
];

const reformerBtn = document.querySelector(".reformer");
const cadillacBtn = document.querySelector(".cadillac");
const chairBtn = document.querySelector(".chair");
const barrelBtn = document.querySelector(".barrel");
const matBtn = document.querySelector(".mat");
const resetBtn = document.querySelector(".reset");
const resultList = document.querySelector(".result-list");

resetBtn.addEventListener("click", function () {
  location.reload();
});

matBtn.addEventListener("click", function () {
  if (matList.length === 0) {
    alert("매트 끝!");
  } else {
    const selectedIndex = Math.floor(Math.random() * matList.length);
    const selectedMat = matList.splice(selectedIndex, 1)[0];

    const li = document.createElement("li");
    li.textContent = "Mat - " + selectedMat;
    resultList.prepend(li);
  }
});

barrelBtn.addEventListener("click", function () {
  if (barrelList.length === 0) {
    alert("바렐 끝!");
  } else {
    const selectedIndex = Math.floor(Math.random() * barrelList.length);
    const selectedBarrel = barrelList.splice(selectedIndex, 1)[0];

    const li = document.createElement("li");
    li.textContent = "Barrel - " + selectedBarrel;
    resultList.prepend(li);
  }
});

reformerBtn.addEventListener("click", function () {
  if (reformerList.length === 0) {
    alert("리포머 끝!");
  } else {
    const selectedIndex = Math.floor(Math.random() * reformerList.length);
    const selectedReformer = reformerList.splice(selectedIndex, 1)[0];

    const li = document.createElement("li");
    li.textContent = "Reformer - " + selectedReformer;
    resultList.prepend(li);
  }
});

cadillacBtn.addEventListener("click", function () {
  if (cadillacList.length === 0) {
    alert("캐딜락 끝!");
  } else {
    const selectedIndex = Math.floor(Math.random() * cadillacList.length);
    const selectedCadillac = cadillacList.splice(selectedIndex, 1)[0];

    const li = document.createElement("li");
    li.textContent = "Cadillac - " + selectedCadillac;
    resultList.prepend(li);
  }
});

chairBtn.addEventListener("click", function () {
  if (chairList.length === 0) {
    alert("체어 끝!");
  } else {
    const selectedIndex = Math.floor(Math.random() * chairList.length);
    const selectedChair = chairList.splice(selectedIndex, 1)[0];

    const li = document.createElement("li");
    li.textContent = "Chair - " + selectedChair;
    resultList.prepend(li);
  }
});
