const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please fill name!"],
  },
  specialization: {
    type: String
  },
  disease: [],
  hospitalName: {
    type: String,
  },
  address: {
    type: String,
  },
  mobileNo: {
    type: Number,
  },
  location: {
    coordinates: {
      type: Array,
    },
  },
  user_distance: {
    type: Number,
    default: 0.0,
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;

const doctor1 = new Doctor({
  name: "Agarwal K.C",
  specialization: "General Surgeon",
  disease: [
    "head surgery",
    "neck surgery",
    "pediatric surgery",
    "surgical criyical care",
    "surgical oncology",
    "trauma",
    "burns",
    "transplants",
    "vascular surgery",
  ],
  hospitalName: "Agarwal nursingh Home",
  address: "salarpur road kkr",
  location: { coordinates: [76.525428, 29.908965] },
  mobileNo: 9896050542,
});

// doctor1.save();
const doctor2 = new Doctor({
  name: "Agarwal P.K",
  specialization: "Pediatrician",
  disease: [
    "anemia",
    "asthma",
    "chickenpox",
    "diphtheria",
    "leukemia",
    "measles",
    "mumps",
    "pneumonia",
    "polio",
    "tuberculosis",
    "whooping cough",
    "lyme disease",
    "fever",
    "down's syndrome",
    "dental caries",
    "cystic fibrosis",
    "chagas disease",
    "candidiasis",
    "cancer",
    "bronchiolitis"
  ],
  hospitalName: "Agarwal nursingh Home",
  address: "salarpur road kkr",
  location: { coordinates: [76.525428, 29.908965] },
  mobileNo: 9896050545,
});

const doctor3 = new Doctor({
  name: "Agarwal Ajay",
  specialization: "General Physician",
  disease: [
    "fever",
    "asthma",
    "heart disease",
    "liver problems",
    "hypertension",
    "neurological problems",
  ],
  hospitalName: "Agarwal nursingh Home",
  address: "salarpur road kkr",
  location: { coordinates: [76.525428, 29.908965] },
  mobileNo: 9812031155,
});

const doctor4 = new Doctor({
  name: "Agarwal Prerna",
  specialization: "Radio Diagnosis",
  disease: [
    "breast cancer",
    "cardiac (Heart)",
    "carotid artery",
    "clinical trial candidacy",
    "colorectal cancer",
    "lung cancer",
  ],
  hospitalName: "Agarwal nursingh Home",
  address: "salarpur road kkr",
  location: { coordinates: [76.525428, 29.908965] },
  mobileNo: 9812031144,
});

const doctor5 = new Doctor({
  name: "Agarwal Aman",
  specialization: "Eye Surgeon",
  disease: ["eye problems"],
  hospitalName: "Agarwal nursingh Home",
  address: "salarpur road kkr",
  location: { coordinates: [76.525428, 29.908965] },
  mobileNo: 9812434411,
});

const doctor6 = new Doctor({
  name: "Agarwal Tulika",
  specialization: "Obs. &Gynae.",
  disease: [
    "endometriosis",
    "uterine fibroids",
    "polycystic ovarian syndrome (PCOS) Acne",
    "abnormal female hair distribution",
  ],
  hospitalName: "Agarwal nursingh Home",
  address: "salarpur road kkr",
  location: { coordinates: [76.525428, 29.908965] },
  mobileNo: 9812435511,
});

const doctor7 = new Doctor({
  name: "Agarwal S.K",
  specialization: "General Physician",
  disease: [
    "fever",
    "asthma",
    "heart disease",
    "liver problems",
    "hypertension",
    "neurological problems"
  ],
  hospitalName: "Agarwal Clinic,",
  address: "Ladwa Road,Pipli,KKR",
  location: { coordinates: [77.0248601, 30.0298613] },
  mobileNo: 9416252313,
});

const doctor8 = new Doctor({
  name: "Agarwal Anil",
  specialization: "Orthopedic Surgeon",
  disease: [
    "arthritis",
    "osteoarthritis",
    "rheumatoid arthritis",
    "treatment for arthritis",
    "bursitis",
    "elbow pain and problems",
    "cubital tunnel syndrome",
    "lateral epicondylitis",
    "medial epicondylitis",
    "fibromyalgia",
    "foot pain and problems",
    "fractures",
    "hip fracture",
    "low back pain",
    "hand pain and problems",
    "carpal tunnel syndrome",
    "knee pain and problems",
    "ligament injuries to the knee",
    "torn meniscus",
    "kyphosis",
    "neck pain and problems",
    "osteoporosis",
    "paget's disease of the bone",
    "scoliosis",
    "shoulder pain and problems",
    "soft-tissue injuries"
  ],
  hospitalName: "Satya Nursing & Maternity Home",
  address: "Pipli,KKR",
  location: { coordinates: [76.880079, 29.97026] },
  mobileNo: 9416291668,
});

const doctor9 = new Doctor({
  name: "Agarwal Neellima",
  specialization: "Obs. &Gynae",
  disease: [
    "endometriosis",
    "uterine fibroids",
    "polycystic ovarian syndrome (PCOS) Acne",
    "abnormal female hair distribution",
  ],
  hospitalName: "Satya Nursing & Maternity Home",
  address: "Pipli,KKR",
  location: { coordinates: [76.880079, 29.97026] },
  mobileNo: 9416291668,
});

const doctor10 = new Doctor({
  name: "Allawadl Bhupesh",
  specialization: "Radiologist",
  disease: ["breast cancer", "colon cancer", " heart disease"],
  hospitalName: "Navjeevan Diagnotics",
  address: "Near Paras Cinema,KKR",
  location: { coordinates: [76.84303, 29.97045] },
  mobileNo: 9354516449,
});

const doctor11 = new Doctor({
  name: "Anand Himanshu",
  specialization: "Orthopedic Surgeon",
  disease: [
    "arthritis",
    "osteoarthritis",
    "rheumatoid arthritis",
    "treatment for arthritis",
    "bursitis",
    "elbow pain and problems",
    "cubital tunnel syndrome",
    "lateral epicondylitis",
    "medial epicondylitis",
    "fibromyalgia",
    "foot pain and problems",
    "fractures",
    "hip fracture",
    "low back pain",
    "hand pain and problems",
    "carpal tunnel syndrome",
    "knee pain and problems",
    "ligament injuries to the knee",
    "torn meniscus",
    "kyphosis",
    "neck pain and problems",
    "osteoporosis",
    "paget's disease of the bone",
    "scoliosis",
    "shoulder pain and problems",
    "soft-tissue injuries",
  ],
  hospitalName: "Anand Orthopedic Center",
  address: "Near Panorama,KKR",
  location: { coordinates: [76.8313735, 29.9659976] },
  mobileNo: 9896038302,
});

const doctor12 = new Doctor({
  name: "Arora Atul",
  specialization: "Physician",
  disease: [
    "fever",
    "asthma",
    "heart disease",
    "liver problems",
    "hypertension",
    "neurological problems"
  ],
  hospitalName: "Atul Clinic",
  address: "105, Sec. 13 U.E. KKR",
  location: { coordinates: [76.85186, 30.72009] },
  mobileNo: 9812098464,
});

const doctor13 = new Doctor({
  name: "Arora vinita",
  specialization: "Obs. &Gynae",
  disease: [
    "endometriosis",
    "uterine fibroids",
    "polycystic ovarian syndrome (PCOS) Acne",
    "abnormal female hair distribution",
  ],
  hospitalName: "Atul Clinic",
  address: "105, Sec. 13 U.E. KKR",
  location: { coordinates: [76.85186, 30.72009] },
  mobileNo: 9896248064,
});

const doctor14 = new Doctor({
  name: "Bansal Ram Naraian",
  specialization: "Eye Surgeon",
  disease: ["eye problems"],
  hospitalName: "Bansal Eye Clinic",
  address: "Red Road,KKR",
  location: { coordinates: [76.839196, 29.972435] },
  mobileNo: 9466296355,
});

const doctor15 = new Doctor({
  name: "Bansal S.N",
  specialization: "Skin & V.D",
  disease: [
    "skin & V.D",
    "argyria",
    "chromhidrosis",
    "epidermolysis bullosa",
    "epidermolysis bullosa",
    "lamellar ichthyosis",
    "necrobiosis lipoidica",
  ],
  hospitalName: "Bansal Skin Care Clinic",
  address: "SCO 63,Sec 17,KKR",
  location: { coordinates: [76.871832, 29.990469] },
  mobileNo: 9416023175,
});

const doctor16 = new Doctor({
  name: "Bharat JaiParkash",
  specialization: "Orthopedic Surgeon",
  disease: [
    "arthritis",
    "osteoarthritis",
    "rheumatoid arthritis",
    "treatment for arthritis",
    "bursitis",
    "elbow pain and problems",
    "cubital tunnel syndrome",
    "lateral epicondylitis",
    "medial epicondylitis",
    "fibromyalgia",
    "foot pain and problems",
    "fractures",
    "hip fracture",
    "low back pain",
    "hand pain and problems",
    "carpal tunnel syndrome",
    "knee pain and problems",
    "ligament injuries to the knee",
    "torn meniscus",
    "kyphosis",
    "neck pain",
    "osteoporosis",
    "paget's disease of the bone",
    "scoliosis",
    "shoulder pain",
    "soft-tissue injuries",
  ],
  hospitalName: "J.P Hospital",
  address: "Pehowa Road,Kurukshetra",
  location: { coordinates: [76.58, 29.98] },
  mobileNo: 9992377525,
});

const doctor17 = new Doctor({
  name: "Bhardwaj R.C",
  specialization: "Pediastrician",
  disease: [
    "anemia",
    "asthma",
    "chickenpox",
    "diphtheria",
    "leukemia",
    "measles",
    "mumps",
    "pneumonia",
    "polio",
    "tuberculosis",
    "whooping cough",
    "lyme disease",
    "fever",
    "down's syndrome",
    "dental caries",
    "cystic fibrosis",
    "chagas disease",
    "candidiasis",
    "cancer",
    "bronchiolitis",
  ],

  hospitalName: "Bhardwaj Hospital",
  address: "Agarsain Chowk,KKR",
  location: { coordinates: [76.8562, 29.9734] },
  mobileNo: 9896020565,
});

const doctor18 = new Doctor({
  name: "Bhardwaj Sunanda",
  specialization: "Obs. &Gynae",
  disease: [
    "endometriosis",
    "uterine fibroids",
    "polycystic ovarian syndrome (PCOS) Acne",
    "abnormal female hair distribution",
  ],
  hospitalName: "Bhardwaj Hospital",
  address: "Agarsain Chowk,KKR",
  location: { coordinates: [76.8562, 29.9734] },
  mobileNo: 9896020565,
});

const doctor19 = new Doctor({
  name: "Bhola Suresh Kumar",
  specialization: "Orthopedic Surgeon",
  disease: [
    "arthritis",
    "osteoarthritis",
    "rheumatoid arthritis",
    "treatment for arthritis",
    "bursitis",
    "elbow pain and problems",
    "cubital tunnel syndrome",
    "lateral epicondylitis",
    "medial epicondylitis",
    "fibromyalgia",
    "foot pain and problems",
    "fractures",
    "hip fracture",
    "low back pain",
    "hand pain and problems",
    "carpal tunnel syndrome",
    "knee pain and problems",
    "ligament injuries to the Knee",
    "torn meniscus",
    "kyphosis",
    "neck pain and problems",
    "osteoporosis",
    "paget's disease of the bone",
    "scoliosis",
    "shoulder pain and problems",
    "soft-tissue injuries"
  ],
  hospitalName: "Bhola Hospital",
  address: "Raiway Road,Opp. Sec 17,KKR",
  location: { coordinates: [76.173678, 30.290758] },
  mobileNo: 9898169405,
});

const doctor20 = new Doctor({
  name: "Bhola Suresh Kumar",
  specialization: "Orthopedic Surgeon",
  disease: [
    "arthritis",
    "osteoarthritis",
    "rheumatoid arthritis",
    "treatment for arthritis",
    "bursitis",
    "elbow pain and problems",
    "cubital tunnel syndrome",
    "lateral epicondylitis",
    "medial epicondylitis",
    "fibromyalgia",
    "foot pain and problems",
    "fractures",
    "hip fracture",
    "low back pain",
    "hand pain and problems",
    "carpal tunnel syndrome",
    "knee pain and problems",
    "ligament injuries to the knee",
    "torn meniscus",
    "kyphosis",
    "neck pain and problems",
    "osteoporosis",
    "paget's disease of the bone",
    "scoliosis",
    "shoulder pain and problems",
    "soft-tissue injuries",
  ],
  hospitalName: "Bhola Hospital",
  address: "Raiway Road,Opp. Sec 17,KKR",
  location: { coordinates: [76.173678, 30.290758] },
  mobileNo: 9898169405,
});
console.log(doctor20.disease);
const doctor21 = new Doctor({
  name: "Chauhan Subhash",
  specialization: "Eye Surgeon",
  disease: ["eye problems"],
  hospitalName: "Chauhan Eye &Maternity Hospital",
  address: "126 sec 5,KKR",
  location: { coordinates: [76.831362, 29.965602] },
  mobileNo: 9416654844,
});

const doctor22 = new Doctor({
  name: "Chauhan Abha",
  specialization: "Obs. &Gynae.",
  disease: [
    "endometriosis",
    "uterine fibroids",
    "polycystic ovarian syndrome (PCOS) Acne",
    "abnormal female hair distribution",
  ],
  hospitalName: "Chauhan Eye &Maternity Hospital",
  address: "126 sec 6,KKR",
  location: { coordinates: [76.831362, 29.965602] },
  mobileNo: 9416654844,
});

const doctor23 = new Doctor({
  name: "Chaudhary Sushil",
  specialization: "Anaesthetist",
  disease: [
    "back pain or muscle pain",
    "Chills caused by low body temperature (hypothermia)",
    "difficulty urinating",
    "fatigue",
    "headache",
    "itching",
    "nausea and vomiting",
    "pain",
    "tenderness",
    "redness",
    " bruising at the injection site",
    "sore throat (pharyngitis)"
  ],
  hospitalName: "",
  address: "",
  mobileNo: 9991132300,
});

const doctor24 = new Doctor({
  name: "Doda N.K",
  specialization: "Consultant Pediatrician",
  disease: [
    "anemia",
    "asthma",
    "chickenpox",
    "diphtheria",
    "leukemia",
    "measles",
    "mumps",
    "pneumonia",
    "polio",
    "tuberculosis",
    "whooping cough",
    "lyme disease",
    "fever",
    "down's syndrome",
    "dental caries",
    "cystic fibrosis",
    "chagas disease",
    "candidiasis",
    "cancer",
    "bronchiolitis"
  ],

  hospitalName: "Doda Children Hospital",
  address: "red Road,KKR",
  location: { coordinates: [76.839196, 29.97243] },
  mobileNo: 9729017421,
});
// doctor24.save();

const doctor25 = new Doctor({
  name: "Doda(mrs.) satendra",
  specialization: "Surgery,Gyane & Anaesthetist",
  disease: [
    "endometriosis",
    "uterine fibroids",
    "polycystic ovarian syndrome (PCOS) Acne",
    "abnormal female hair distribution",
  ],
  hospitalName: "Doda Children Hospital",
  address: "red Road,KKR",
  location: { coordinates: [76.839196, 29.97243] },
  mobileNo: 9896852051,
});
// doctor25.save();

const doctor26 = new Doctor({
  name: "Goyal Ajay",
  specialization: "General Surgeon",
  disease: [
    "head surgery",
    "neck surgery",
    "pediatric surgery",
    "surgical criyical care",
    "surgical oncology",
    "trauma",
    "burns",
    "transplants",
    "vascular surgery",
  ],
  hospitalName: "Apna Hospital",
  address: "red Road,KKR",
  location: { coordinates: [76.839196, 29.97243] },
  mobileNo: 9354666333,
});
// doctor26.save();

const doctor27 = new Doctor({
  name: "Goyal Geeta",
  specialization: "Pediatrician",
  disease: [
    "anemia",
    "asthma",
    "chickenpox",
    "diphtheria",
    "leukemia",
    "measles",
    "mumps",
    "pneumonia",
    "polio",
    "tuberculosis",
    "whooping cough",
    "lyme disease",
    "fever",
    "down's syndrome",
    "dental caries",
    "cystic fibrosis",
    "chagas disease",
    "candidiasis",
    "cancer",
    "bronchiolitis",
  ],

  hospitalName: "Apna Hospital",
  address: "red Road,KKR",
  location: { coordinates: [76.839196, 29.97243] },
  mobileNo: 9354666999,
});
// doctor27.save();

const doctor28 = new Doctor({
  name: "Goyal Vikas",
  specialization: "Orthopedic Surgeon",
  disease: [
    "arthritis",
    "osteoarthritis",
    "rheumatoid arthritis",
    "treatment for arthritis",
    "bursitis",
    "elbow pain and problems",
    "cubital tunnel syndrome",
    "lateral epicondylitis",
    "medial epicondylitis",
    "fibromyalgia",
    "foot pain and problems",
    "fractures",
    "hip fracture",
    "low back pain",
    "hand pain and problems",
    "carpal tunnel syndrome",
    "knee pain and problems",
    "ligament injuries to the knee",
    "torn meniscus",
    "kyphosis",
    "neck pain and problems",
    "osteoporosis",
    "paget's disease of the bone",
    "ccoliosis",
    "shoulder pain and problems",
    "soft-tissue injuries",
  ],
  hospitalName: "Apna Hospital",
  address: "red Road,KKR",
  location: { coordinates: [76.839196, 29.97243] },
  mobileNo: 9896055533,
});
// doctor28.save();

const doctor29 = new Doctor({
  name: "Goyal Apra",
  specialization: "Anaesthesist",
  disease: [
    "back pain or muscle pain",
    "hypothermia",
    "difficulty urinating",
    "fatigue",
    "headache",
    "itching",
    "nausea and vomiting",
    "pain",
    "tenderness",
    "redness",
    "bruising at the injection site",
    "sore throat (pharyngitis)",
  ],
  hospitalName: "Apna Hospital",
  address: "red Road,KKR",
  location: { coordinates: [76.839196, 29.97243] },
  mobileNo: 9416154140,
});
// doctor29.save();

const doctor30 = new Doctor({
  name: "Goyal Kedar",
  specialization: "Pediatrician",
  disease: [
    "anemia",
    "asthma",
    "chickenpox",
    "diphtheria",
    "leukemia",
    "measles",
    "mumps",
    "pneumonia",
    "polio",
    "tuberculosis",
    "whooping cough",
    "lyme disease",
    "fever",
    "down's syndrome",
    "dental caries",
    "cystic fibrosis",
    "chagas disease",
    "candidiasis",
    "cancer",
    "bronchiolitis",
  ],

  hospitalName: "Kedar Children Hospital",
  address: "Pipli Road,KKR",
  location: { coordinates: [76.8619636, 29.9739743] },
  mobileNo: 9812273737,
});
// doctor30.save();

const doctor31 = new Doctor({
  name: "Goyal Manoj",
  specialization: "Pediatrics",
  disease: [
    "anemia",
    "asthma",
    "chickenpox",
    "diphtheria",
    "leukemia",
    "measles",
    "mumps",
    "pneumonia",
    "polio",
    "tuberculosis",
    "whooping cough",
    "lyme disease",
    "fever",
    "down's syndrome",
    "dental caries",
    "cystic fibrosis",
    "chagas disease",
    "candidiasis",
    "cancer",
    "bronchiolitis",
  ],
  hospitalName: "Chandigarh Children Hospital",
  address: "Red Road,KKR",
  location: { coordinates: [76.8415546, 29.9703223] },
  mobileNo: 9416137875,
});
// doctor31.save();

const doctor32 = new Doctor({
  name: "Goyal Madan",
  specialization: "General Surgeon",
  disease: [
    "head surgery",
    "neck surgery",
    "pediatric surgery",
    "surgical criyical care",
    "surgical oncology",
    "trauma",
    "burns",
    "transplants",
    "vascular surgery",
  ],
  hospitalName: "Gita Hospital,Gita Colony",
  address: "KKR",
  location: { coordinates: [76.878282, 29.9695121] },
  mobileNo: 9416081547,
});
// doctor32.save();

const doctor33 = new Doctor({
  name: "Goyal Neelam",
  specialization: "Obs. &Gynae.",
  disease: [
    "endometriosis",
    "uterine fibroids",
    "polycystic ovarian syndrome",
    "abnormal female hair distribution",
  ],
  hospitalName: "Gita Hospital",
  address: "Gita Colony,KKR",
  location: { coordinates: [76.878282, 29.9695121] },
  mobileNo: 9466218547,
});
// doctor33.save();

const doctor34 = new Doctor({
  name: "Goyal Moti Lal",
  specialization: "Anaesthesist",
  disease: [
    "back pain",
    "muscle pain",
    "hypothermia",
    "difficulty urinating",
    "fatigue",
    "headache",
    "itching",
    "nausea and vomiting",
    "pain",
    "tenderness",
    "redness",
    "bruising at the injection site",
    "pharyngitis",
  ],
  hospitalName: "",
  address: "#1220/7,U.E,KKR",
  location: { coordinates: [76.878281, 29.969513] },
  mobileNo: 9812424250,
});
// doctor34.save();

const doctor35 = new Doctor({
  name: "Goyal Pawan Kumar",
  specialization: "General Surgeon",
  disease: [
    "head surgery",
    "neck surgery",
    "pediatric surgery",
    "surgical criyical care",
    "surgical oncology",
    "trauma",
    "burns",
    "transplants",
    "vascular surgery",
  ],
  hospitalName: "Pawan Surgical Hospital",
  address: "Red Road,KKR",
  location: { coordinates: [76.840041, 29.972184] },
  mobileNo: 9812031635,
});
// doctor35.save();

const doctor36 = new Doctor({
  name: "Goyal Lokender",
  specialization: "Pediatrics",
  disease: [
    "anemia",
    "asthma",
    "chickenpox",
    "diphtheria",
    "leukemia",
    "measles",
    "mumps",
    "pneumonia",
    "polio",
    "tuberculosis",
    "whooping cough",
    "lyme disease",
    "fever",
    "down's syndrome",
    "dental caries",
    "cystic fibrosis",
    "chagas disease",
    "candidiasis",
    "cancer",
    "bronchiolitis",
  ],
  hospitalName: "RadhaKishan Children Hospital",
  address: "Jyoti Nagar",
  location: { coordinates: [76.84564, 29.97257] },
  mobileNo: 9416029516,
});

const doctor37 = new Doctor({
  name: "Goyal Monika Dixit",
  specialization: "Pathology",
  disease: [
    "cancer",
    "blood disorders",
    "infectious diseases",
    "neonatal disorders",
    "hemophilia",
    "stroke",
    "poisoning",
    "hiv",
    "aids",
    "cardiovascular diseases",
    "endocrine disorders",
  ],
  hospitalName: "RadhaKishan Children Hospital",
  address: "Jyoti Nagar",
  location: { coordinates: [76.84564, 29.97257] },
  mobileNo: 9996606969,
});

const doctor38 = new Doctor({
  name: "Garg Subhash Chander",
  specialization: "Physician",
  disease: [
    "fever",
    "asthma",
    "heart disease",
    "liver problems",
    "hypertension",
    "neurological problems",
  ],
  hospitalName: "Kurukshetra Nursing Home",
  address: "Pipli Road,KKR",
  location: { coordinates: [76.8615666, 29.9739261] },
  mobileNo: 9416039397,
});

const doctor39 = new Doctor({
  name: "Garg Subhash Chander",
  specialization: "Physician",
  disease: [
    "fever",
    "asthma",
    "heart disease",
    "liver problems",
    "hypertension",
    "neurological problems",
  ],
  hospitalName: "Kurukshetra Nursing Home",
  address: "Pipli Road,KKR",
  location: { coordinates: [76.8615666, 29.9739261] },
  mobileNo: 9416039397,
});

const doctor40 = new Doctor({
  name: "Gandhi Naresh Kumar",
  specialization: "Orthopedic Surgeon",
  disease: [
    "arthritis",
    "osteoarthritis",
    "rheumatoid arthritis",
    "treatment for arthritis",
    "bursitis",
    "elbow pain and problems",
    "cubital tunnel syndrome",
    "lateral epicondylitis",
    "medial epicondylitis",
    "fibromyalgia",
    "foot pain and problems",
    "fractures",
    "hip fracture",
    "low back pain",
    "hand pain and problems",
    "carpal tunnel syndrome",
    "knee pain and problems",
    "ligament injuries to the knee",
    "torn meniscus",
    "kyphosis",
    "neck pain and problems",
    "osteoporosis",
    "paget's disease of the bone",
    "scoliosis",
    "shoulder pain and problems",
    "soft-tissue injuries",
  ],
  hospitalName: "Gandhi Dental & Ortho Center",
  address: "Ambedkar Chowk",
  location: { coordinates: [76.8356, 29.9702] },
  mobileNo: 9896101599,
});

const doctor41 = new Doctor({
  name: "Gupta Ravi",
  specialization: "Orthopedic Surgeon",
  disease: [
    "arthritis",
    "osteoarthritis",
    "rheumatoid arthritis",
    "treatment for arthritis",
    "bursitis",
    "elbow pain and problems",
    "cubital tunnel syndrome",
    "lateral epicondylitis",
    "medial epicondylitis",
    "fibromyalgia",
    "foot pain and problems",
    "fractures",
    "hip fracture",
    "low back pain",
    "hand pain and problems",
    "carpal tunnel syndrome",
    "knee pain and problems",
    "ligament injuries to the knee",
    "torn meniscus",
    "kyphosis",
    "neck pain and problems",
    "osteoporosis",
    "paget's disease of the bone",
    "scoliosis",
    "shoulder pain and problems",
    "soft-tissue injuries",
  ],
  hospitalName: "Gagan Hospital",
  address: "behind Old Bus Stand,KKR",
  location: { coordinates: [76.838, 29.973] },
  mobileNo: 9416249881,
});

const doctor42 = new Doctor({
  name: "Gupta Amita",
  specialization: "Obs. &Gynae.",
  disease: [
    "endometriosis",
    "uterine fibroids",
    "polycystic ovarian syndrome",
    "abnormal female hair distribution",
  ],
  hospitalName: "Gagan Hospital",
  address: "behind Old Bus Stand,KKR",
  location: { coordinates: [76.838, 29.973] },
  mobileNo: 9416249881,
});

const doctor43 = new Doctor({
  name: "Gupta Pradeep",
  specialization: "Orthopedic Surgeon",
  disease: [
    "arthritis",
    "osteoarthritis",
    "rheumatoid arthritis",
    "arthritis",
    "bursitis",
    "elbow pain",
    "cubital tunnel syndrome",
    "lateral epicondylitis",
    "medial epicondylitis",
    "fibromyalgia",
    "foot pain",
    "fractures",
    "hip fracture",
    "low back pain",
    "hand pain",
    "carpal tunnel syndrome",
    "knee pain",
    "ligament injuries",
    "torn meniscus",
    "kyphosis",
    "neck pain",
    "osteoporosis",
    "paget's Disease of the bone",
    "scoliosis",
    "shoulder pain",
    "soft-tissue injuries",
  ],
  hospitalName: "Aashirwad Nursing Home",
  address: "#9,Sec 7,KKR",
  location: { coordinates: [76.8699575, 29.974042] },
  mobileNo: 9896217722,
});

const doctor44 = new Doctor({
  name: "Mahajan Praveen",
  specialization: "Obs. &Gynae",
  disease: [
    "endometriosis",
    "uterine fibroids",
    "polycystic ovarian syndrome",
    "abnormal female hair distribution",
  ],
  hospitalName: "Aashirwad Nursing Home",
  address: "#9,Sec 7,KKR",
  location: { coordinates: [76.8699575, 29.974042] },
  mobileNo: 9896740777,
});

const doctor45 = new Doctor({
  name: "Gupta Rishi Pal",
  specialization: "Obs. &Gynae",
  disease: [
    "endometriosis",
    "uterine fibroids",
    "polycystic ovarian syndrome",
    "abnormal female hair distribution",
  ],
  hospitalName: "Aashirwad Nursing Home",
  address: "#9,Sec 7,KKR",
  location: { coordinates: [76.8699575, 29.974042] },
  mobileNo: 9896740777,
});

const doctor46 = new Doctor({
  name: "Gupta D.N",
  specialization: "General Physician",
  disease: [
    "fever",
    "asthma",
    "heart disease",
    "liver problems",
    "hypertension",
    "neurological problems",
  ],
  hospitalName: "Akshat Nursiing & Maternity Home",
  address: "Railway Road,KKR",
  location: { coordinates: [76.8364633, 29.9698354] },
  mobileNo: 9812260255,
});

const doctor47 = new Doctor({
  name: "Gupta Sudha",
  specialization: "General Physician",
  disease: [
    "fever",
    "asthma",
    "heart disease",
    "liver problems",
    "hypertension",
    "neurological problems",
  ],
  hospitalName: "Akshat Nursiing & Maternity Home",
  address: "Railway Road,KKR",
  location: { coordinates: [76.8364633, 29.9698354] },
  mobileNo: 9812595915,
});

const doctor48 = new Doctor({
  name: "Gupta Vijay Kumar",
  specialization: "Eye Surgeon",
  disease: ["eye Problems"],
  hospitalName: "Ankur Nursing Home",
  address: "Red Road,KKR",
  location: { coordinates: [76.841739, 29.97] },
  mobileNo: 9896248149,
});

const doctor49 = new Doctor({
  name: "Pareek Sneh",
  specialization: "Obs. &Gynae.",
  disease: [
    "endometriosis",
    "uterine fibroids",
    "polycystic ovarian syndrome",
    "abnormal female hair distribution",
  ],
  hospitalName: "Ankur Nursing Home",
  address: "Red Road,KKR",
  location: { coordinates: [76.841739, 29.97] },
  mobileNo: 9896033033,
});

const doctor50 = new Doctor({
  name: "Gupta Lalit",
  specialization: "ENT Surgeon",
  disease: ["eye problems"],
  hospitalName: "SACH Kutiya Hospital",
  address: "Red Road,KKR",
  location: { coordinates: [76.839196, 29.972435] },
  mobileNo: 9466468841,
});

const doctor51 = new Doctor({
  name: "Girdhar T.R",
  specialization: " General Physician",
  disease: [
    "fever",
    "asthma",
    "heart disease",
    "liver problems",
    "hypertension",
    "neurological problems",
  ],
  hospitalName: "Retd. Deputy CMO",
  address: "LNJP,KKR",
  location: { coordinates: [76.8781, 29.9698] },
  mobileNo: 9466691130,
});

const doctor52 = new Doctor({
  name: "Kaushal M.K",
  specialization: " General Physician",
  disease: [
    "fever",
    "asthma",
    "heart disease",
    "liver problems",
    "hypertension",
    "neurological problems",
  ],
  hospitalName: "Dr. kaushal'a Clinic,Umri Chowk",
  address: "G.T.Road,KKR",
  location: { coordinates: [76.829086, 30.018977] },
  mobileNo: 9896777264,
});

const doctor53 = new Doctor({
  name: "Khera R.N",
  specialization: "Anaesthesist",
  disease: [
    "back pain",
    "muscle pain",
    "hypothermia",
    "difficulty urinating",
    "fatigue",
    "headache",
    "itching",
    "nausea",
    "vomiting",
    "pain",
    "tenderness",
    "redness",
    " bruising at the injection site",
    "pharyngitis",
  ],
  hospitalName: "",
  address: "",
  mobileNo: 9812018185,
});

const doctor54 = new Doctor({
  name: "Lalit Desh Kumar",
  specialization: "General Physician",
  disease: [
    "fever",
    "asthma",
    "heart disease",
    "liver problems",
    "hypertension",
    "neurological problems",
  ],
  hospitalName: "Adarsh Clinic",
  address: "Railway Road,KKR",
  location: { coordinates: [76.85016, 29.96961] },
  mobileNo: 9416194888,
});

const doctor55 = new Doctor({
  name: "Lamba Rohit",
  specialization: "Eye Surgeon",
  disease: ["eye problems"],
  hospitalName: "Rani Maa Eye Hospital",
  address: "Piplli Road,KKR",
  location: { coordinates: [76.85016, 29.969614] },
  mobileNo: 9996019802,
});

const doctor56 = new Doctor({
  name: "Lamba Alpna",
  specialization: "Eye Surgeon",
  disease: ["eye problems"],
  hospitalName: "Lamba Eye Center",
  address: "Shastri Market,KKR",
  location: { coordinates: [76.829747, 29.9691] },
  mobileNo: 9996019802,
});

const doctor57 = new Doctor({
  name: "Madkan sarla",
  specialization: "Obs. &Gynae.",
  disease: [
    "endometriosis",
    "uterine fibroids",
    "polycystic ovarian syndrome",
    "abnormal female hair distribution",
  ],
  hospitalName: "Payal Nursing Home",
  address: "Sector 13,KKR",
  location: { coordinates: [76.860451, 29.973331] },
  mobileNo: 9812029886,
});

const doctor58 = new Doctor({
  name: "Mahant Davinder",
  specialization: "General Physician",
  disease: [
    "fever",
    "asthma",
    "heart disease",
    "liver problems",
    "hypertension",
    "neurological problems",
  ],
  hospitalName: "",
  address: "#1488/7, U.E,KKR",
  location: { coordinates: [76.878281, 29.96951] },
  mobileNo: 9466218701,
});

const doctor59 = new Doctor({
  name: "Mahant Shashi",
  specialization: "General Physician",
  disease: [
    "fever",
    "asthma",
    "heart disease",
    "liver problems",
    "hypertension",
    "neurological problems",
  ],
  hospitalName: "",
  address: "#1488/7, U.E,KKR",
  location: { coordinates: [76.878281, 29.96951] },
  mobileNo: 9466218701,
});

const doctor60 = new Doctor({
  name: "Mehta Surender",
  specialization: "General Surgeon",
  disease: [
    "head surgery",
    "neck surgery",
    "pediatric surgery",
    "surgical criyical care",
    "surgical oncology",
    "trauma",
    "burns",
    "transplants",
    "vascular surgery",
  ],
  hospitalName: "S.Mehta surgical Hospital",
  address: "Jyoti Nagar,KKR",
  location: { coordinates: [76.8425, 29.974] },
  mobileNo: 9812233184,
});

const doctor61 = new Doctor({
  name: "Mittal Neeraj",
  specialization: "Pathologist",
  disease: [
    "cancer",
    "blood disorders",
    "infectious diseases",
    "neonatal disorders",
    "hemophilia",
    "stroke",
    "poisoning",
    "hiv",
    "aids",
    "cardiovascular diseases",
    "endocrine disorders",
  ],
  hospitalName: "Dr. Mittal Path Lab & Dental Center",
  address: "KKR",
  location: { coordinates: [76.8564, 29.97319] },
  mobileNo: 9315394565,
});

const doctor62 = new Doctor({
  name: "Nagpal Amir Chand",
  specialization: "General Surgeon",
  disease: [
    "head surgery",
    "neck surgery",
    "pediatric surgery",
    "surgical criyical care",
    "surgical oncology",
    "trauma",
    "burns",
    "transplants",
    "vascular surgery",
  ],

  hospitalName: "Nagpal Nursiing Home",
  address: "Red Road,KKR",
  location: { coordinates: [76.8391962545, 29.9724354217] },
  mobileNo: 9355252456,
});

const doctor63 = new Doctor({
  name: "Nagpal Asha",
  specialization: "General Surgeon",
  disease: [
    "head surgery",
    "neck surgery",
    "pediatric surgery",
    "surgical criyical care",
    "surgical oncology",
    "trauma",
    "burns",
    "transplants",
    "vascular surgery",
  ],

  hospitalName: "Nagpal Nursiing Home",
  location: { coordinates: [76.8391962545, 29.9724354217] },
  address: "Red Road,KKR",
  mobileNo: 9355252456,
});

const doctor64 = new Doctor({
  name: "Mittal Neelam",
  specialization: "Obs. &Gynae.",
  disease: [
    "endometriosis",
    "uterine fibroids",
    "polycystic ovarian syndrome",
    "abnormal female hair distribution",
  ],
  hospitalName: "Naveen Nursing Home",
  location: { coordinates: [76.7863, 30.0973] },
  address: "Ajrana Kalan,KKR",
});

const doctor65 = new Doctor({
  name: "sharma Rakesh Pai",
  specialization: " Psychiatry & De-addiction",
  hospitalName: "Aggarwal Nursing Home",
  location: { coordinates: [76.841478, 29.966323] },
  address: "Salarpur Road,KKR",
  mobileNo: 9812464646,
});

const doctor66 = new Doctor({
  name: "Sharma Ajay",
  specialization: "Pediatrician",
  disease: [
    "anemia",
    "asthma",
    "chickenpox",
    "diphtheria",
    "leukemia",
    "measles",
    "mumps",
    "pneumonia",
    "polio",
    "tuberculosis",
    "whooping cough",
    "lyme disease",
    "fever",
    "down's syndrome",
    "dental caries",
    "cystic fibrosis",
    "chagas disease",
    "candidiasis",
    "cancer",
    "bronchiolitis",
  ],

  hospitalName: "Shivam Children Hospital",
  address: "Near Old Bus Stand,KKR",
  location: { coordinates: [76.8387102, 29.9730449] },
  mobileNo: 9416018577,
});

const doctor67 = new Doctor({
  name: "Sharma Urvashi",
  specialization: "General Physician",
  disease: [
    "fever",
    "asthma",
    "heart disease",
    "liver problems",
    "hypertension",
    "neurological problems",
  ],
  hospitalName: "Shivam Children Hospital",
  address: "Near Old Bus Stand,KKR",
  location: { coordinates: [76.8387102, 29.9730449] },
  mobileNo: 9416018577,
});

const doctor68 = new Doctor({
  name: "sharma Kamal",
  specialization: "General Physician",
  disease: [
    "fever",
    "asthma",
    "heart disease",
    "liver problems",
    "hypertension",
    "neurological problems",
  ],
  hospitalName: "Deputy Civil Surgeon",
  address: "Near Old Bus Stand,KKR",
  location: { coordinates: [76.8387102, 29.9730449] },
  mobileNo: 9466390390,
});

const doctor69 = new Doctor({
  name: "Sharma Madhu",
  specialization: "General Physician",
  disease: [
    "fever",
    "asthma",
    "heart disease",
    "liver problems",
    "hypertension",
    "neurological problems",
  ],
  hospitalName: "Deputy Civil Surgeon",
  address: "Near Old Bus Stand,KKR",
  location: { coordinates: [76.8387102, 29.9730449] },
  mobileNo: 9466390390,
});

const doctor70 = new Doctor({
  name: "Sandhu Arun",
  specialization: "Radiologist",
  disease: ["breast cancer", "colon cancer", " heart disease"],
  hospitalName: "Alpha C.T Scan Center",
  address: "Pipli Road,KKR",
  location: { coordinates: [76.8567322, 29.9736342] },
  mobileNo: 9812040814,
});

const doctor71 = new Doctor({
  name: "Saini Samsher Singh",
  specialization: "General Surgeon",
  disease: [
    "head surgery",
    "neck surgery",
    "pediatric surgery",
    "surgical criyical care",
    "surgical oncology",
    "trauma",
    "burns",
    "transplants",
    "vascular surgery",
  ],
  hospitalName: "",
  address: "#237,sec 7,U.E KKR",
  location: { coordinates: [76.8766752, 29.97468865] },
  mobileNo: 9416221010,
});

const doctor72 = new Doctor({
  name: "Saini Rajesh",
  specialization: "Eye Surgeon",
  disease: ["eye problems"],
  hospitalName: "Saini Eye Care Centre",
  address: "#218,sec 7 KKR",
  location: { coordinates: [76.870655, 29.968989] },
  mobileNo: 9416035050,
});

const doctor73 = new Doctor({
  name: "Saini Anupama",
  specialization: "General Physician",
  disease: [
    "fever",
    "asthma",
    "heart disease",
    "liver problems",
    "hypertension",
    "neurological problems",
  ],
  hospitalName: "Saini Eye Care Centre",
  address: "#218,sec 7 KKR",
  location: { coordinates: [76.8567322, 29.9736342] },
  mobileNo: 9416035050,
});

const doctor74 = new Doctor({
  name: "Sethi Som Nath",
  specialization: "General Physician",
  disease: [
    "fever",
    "asthma",
    "heart disease",
    "liver problems",
    "hypertension",
    "neurological problems",
  ],
  hospitalName: "Sethi Nursing Home",
  address: "Kurukshetra",
  location: { coordinates: [76.40696, 29.841835] },
  mobileNo: 9416037003,
});

const doctor75 = new Doctor({
  name: "Sethi Suman",
  specialization: "Pediatrician",
  disease: [
    "anemia",
    "asthma",
    "chickenpox",
    "diphtheria",
    "leukemia",
    "measles",
    "mumps",
    "pneumonia",
    "polio",
    "tuberculosis",
    "whooping cough",
    "lyme disease",
    "fever",
    "down's syndrome",
    "dental caries",
    "cystic fibrosis",
    "chagas disease",
    "candidiasis",
    "cancer",
    "bronchiolitis",
  ],

  hospitalName: "Sethi Nursing Home",
  address: "Kurukshetra",
  location: { coordinates: [76.40696, 29.841835] },
  mobileNo: 9416037003,
});

const doctor76 = new Doctor({
  name: "Sobti H.K",
  specialization: "General Physician",
  disease: [
    "fever",
    "asthma",
    "heart disease",
    "liver problems",
    "hypertension",
    "neurological problems",
  ],
  hospitalName: "sobti Nursing Home",
  address: "Red Road,KKR",
  location: { coordinates: [76.8436142, 29.9718988] },
  mobileNo: 9896352621,
});

const doctor77 = new Doctor({
  name: "Soni Parmod Kumar",
  specialization: "Orthopedic Surgeon",
  disease: [
    "arthritis",
    "osteoarthritis",
    "rheumatoid arthritis",
    "arthritis",
    "bursitis",
    "elbow pain",
    "cubital tunnel syndrome",
    "lateral epicondylitis",
    "medial epicondylitis",
    "fibromyalgia",
    "foot pain",
    "fractures",
    "hip fracture",
    "low back pain",
    "hand pain",
    "carpal tunnel syndrome",
    "knee pain",
    "ligament injury",
    "torn meniscus",
    "kyphosis",
    "neck pain",
    "osteoporosis",
    "paget's Disease",
    "scoliosis",
    "shoulder Pain",
    "soft-tissue injuries",
  ],
  hospitalName: "Soni Orthopaedic Hospital",
  address: "Pipli Road,KKR",
  location: { coordinates: [76.40696, 29.841835] },
  mobileNo: 9416301628,
});

const doctor78 = new Doctor({
  name: "Soni Ranju",
  specialization: "Obs. &Gynae.",
  disease: [
    "endometriosis",
    "uterine fibroids",
    "polycystic ovarian syndrome",
    "abnormal female hair distribution",
  ],
  hospitalName: "Soni Orthopaedic Hospital",
  address: "Pipli Road,KKR",
  mobileNo: 9416301628,
  location: { coordinates: [76.856283, 29.973481] },
});

const doctor79 = new Doctor({
  name: "Sahni S.L",
  specialization: " De-addiction",
  hospitalName: "sahni Nursing Home",
  address: "Pipli Road,KKR",
  location: { coordinates: [76.8612, 29.974] },
  mobileNo: 9813178290,
});

const doctor80 = new Doctor({
  name: "Singhal Sudesh",
  specialization: "MD Medician",
  hospitalName: "Singhal Bhawan ",
  address: "Sec 13,KKR",
  location: { coordinates: [76.9051924, 29.9567982] },
  mobileNo: 9812132732,
});

const doctor81 = new Doctor({
  name: "Singhal Namarata",
  specialization: "MBBS",
  hospitalName: "Singhal Bhawan ",
  address: "Sec 13,KKR",
  location: { coordinates: [76.856283, 29.973481] },
  mobileNo: 9812132732,
});

const doctor82 = new Doctor({
  name: "Singal Kamal",
  specialization: "Pediastrician",
  disease: [
    "anemia",
    "asthma",
    "chickenpox",
    "diphtheria",
    "leukemia",
    "measles",
    "mumps",
    "pneumonia",
    "polio",
    "tuberculosis",
    "whooping cough",
    "lyme disease",
    "fever",
    "down's syndrome",
    "dental caries",
    "cystic fibrosis",
    "chagas disease",
    "candidiasis",
    "cancer",
    "bronchiolitis",
  ],

  hospitalName: "Harsh Children Hospital",
  location: { coordinates: [76.854401, 29.973034] },
  address: "Red Road,KKR",
});

const doctor83 = new Doctor({
  name: "Singal Rajni",
  specialization: "Gynae",
  disease: [
    "endometriosis",
    "uterine fibroids",
    "polycystic ovarian syndrome",
    "abnormal female hair distribution",
  ],
  hospitalName: "Harsh Children Hospital",
  location: { coordinates: [76.854401, 29.973034] },
  address: "Red Road,KKR",
});

const doctor84 = new Doctor({
  name: "Taneja Priti Pal",
  specialization: " Radio Diagnosis",
  disease: [
    "breast cancer",
    "cardiac",
    "carotid artery",
    "clinical trial candidacy",
    "colorectal cancer",
    "lung cancer",
    "cancer",
  ],
  hospitalName: "Taneja X-Rays & Ultrasound center",
  address: "",
  location: { coordinates: [76.8399943, 29.9727969] },
  mobileNo: 9896084274,
});

const doctor85 = new Doctor({
  name: "Virk B.P.S",
  specialization: "ent surgeon",
  disease: ["eye problems"],
  hospitalName: "Virk Nursing Home",
  address: "SCO 17,Ambedkar Chowk,KKR",
  location: { coordinates: [76.323537, 29.641551] },
  mobileNo: 9416035036,
});

const doctor86 = new Doctor({
  name:"Dr.Minati Raut",
  hospitalName: "Health Center NIT KKR",
  address: "NIT KKR",
  mobileNo: 01744233318,
  location: { coordinates: [76.81544353728968,29.950163418584104] }
});

const doctor87 = new Doctor({
  name:"Dr.Sumit Kumar Guin",
  hospitalName: "Health Center NIT KKR",
  address: "NIT KKR",
  mobileNo: 01744233321,
  location: { coordinates: [76.81544353728968,29.950163418584104] }
});

const doctor88 = new Doctor({
  name:"Dr. Rishu Saxena",
  hospitalName: "Health Center NIT KKR",
  address: "NIT KKR",
  mobileNo: 01744233317,
  location: { coordinates: [76.81544353728968,29.950163418584104] }
});

const doctor89 = new Doctor({
  name:"Dr. Richa Passi",
  hospitalName: "Health Center NIT KKR",
  address: "NIT KKR",
  mobileNo: 01744-233319,
  location: { coordinates: [76.81544353728968,29.950163418584104] }
});

const doctor90 = new Doctor({
  name:"Dr. Anurag Kaushal",
  hospitalName: "Shri Balaji Aarogyam Hospital",
  specialization: "General Physician",
  disease: [
    "fever",
    "asthma",
    "heart disease",
    "liver problems",
    "hypertension",
    "neurological problems",
  ],
  address: "Behind Old Bus Stand Kurukshetra",
  mobileNo: 9992630762,
  location: { coordinates: [76.84232,29.97526] }
});

const doctor91 = new Doctor({
  name:"Dr. Neha Khaneja",
  specialization: "Gynaecologist and Obstetrician",
  hospitalName: "Shri Balaji Aarogyam Hospital",
  address: "Behind Old Bus Stand Kurukshetra",
  mobileNo: 01744270255,
  location: { coordinates: [76.84232,29.97526] }
});


// Doctor.insertMany(
//   [
//     doctor1,
//     doctor2,
//     doctor3,
//     doctor4,
//     doctor5,
//     doctor6,
//     doctor7,
//     doctor8,
//     doctor9,
//     doctor10,
//     doctor11,
//     doctor12,
//     doctor13,
//     doctor14,
//     doctor15,
//     doctor16,
//     doctor17,
//     doctor18,
//     doctor19,
//     doctor20,
//     doctor21,
//     doctor22,
//     doctor23,
//     doctor24,
//     doctor25,
//     doctor26,
//     doctor27,
//     doctor28,
//     doctor29,
//     doctor30,
//     doctor31,
//     doctor32,
//     doctor33,
//     doctor34,
//     doctor35,
//     doctor36,
//     doctor37,
//     doctor38,
//     doctor39,
//     doctor40,
//     doctor41,
//     doctor42,
//     doctor43,
//     doctor44,
//     doctor45,
//     doctor46,
//     doctor47,
//     doctor48,
//     doctor49,
//     doctor50,
//     doctor51,
//     doctor52,
//     doctor53,
//     doctor54,
//     doctor55,
//     doctor56,
//     doctor57,
//     doctor58,
//     doctor59,
//     doctor60,
//     doctor61,
//     doctor62,
//     doctor63,
//     doctor64,
//     doctor65,
//     doctor66,
//     doctor67,
//     doctor68,
//     doctor69,
//     doctor70,
//     doctor71,
//     doctor72,
//     doctor73,
//     doctor74,
//     doctor75,
//     doctor76,
//     doctor77,
//     doctor78,
//     doctor79,
//     doctor80,
//     doctor81,
//     doctor82,
//     doctor83,
//     doctor84,
//     doctor85,
//     doctor86,
//     doctor87,
//     doctor88,
//     doctor89,
//     doctor90,
//     doctor91,
//   ],

//   function (err) {
//     if (err) {
//       console.log(err);
//     }
//   }
// );
