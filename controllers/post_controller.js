const Doctor = require("../configration/mongoose.js");

function distance(lat1, lat2, lon1, lon2) {
  // The math module contains a function
  // named toRadians which converts from
  // degrees to radians.
  lon1 = (lon1 * Math.PI) / 180;
  lon2 = (lon2 * Math.PI) / 180;
  lat1 = (lat1 * Math.PI) / 180;
  lat2 = (lat2 * Math.PI) / 180;

  // Haversine formula
  let dlon = lon2 - lon1;
  let dlat = lat2 - lat1;
  let a =
    Math.pow(Math.sin(dlat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

  let c = 2 * Math.asin(Math.sqrt(a));

  // Radius of earth in kilometers. Use 3956
  // for miles
  let r = 6371;

  // calculate the result
  return c * r;
}
// async function f (disease, req){
//   return new Promise((resolve, reject) => {
//    await Doctor.find({ disease: disease }, function (err, doctorInfo) {
//       if (err) {
//         console.log(err);
//       } else {
//         doctorInfo.forEach(function (doctors) {
//           let lat2 = doctors.location.coordinates[1];
//           let lon2 = doctors.location.coordinates[0];
//           let lat1 = req.body.lat;
//           let lon1 = req.body.lon;

//           console.log(distance(lat1, lat2, lon1, lon2));
//           let userdistance = distance(lat1, lat2, lon1, lon2);
//           console.log(doctors._id);
//           console.log(lat1);
//          await doctors.user_distance = userdistance;
//          await doctors.save();
//         });
//       }
//     });
//     resolve(Doctor);
//   });
// };

// module.exports.update = (req, res) => {
//   const disease = req.body.inputDisease.toLowerCase();
//   f(disease, req).then((value) => {
//     value
//       .find({ disease: disease }, function (err, doctors) {
//         arr = [];
//         doctors.forEach(function (doctor) {
//           arr.push([doctor.name, doctor.user_distance.toFixed(2), doctor._id]);
//         });
//         return res.render("doctor_list", { arr: arr, user: 1 });
//       })
//       .sort("user_distance");
//   });
// };
const successfulLookup = (LAT, LNG) => {
  fetch(
    "https://api.opencagedata.com/geocode/v1/json?q=${LAT}+${LNG}&key=1d836024556548f8a32e9922bd83313"
  )
    .then(response.json())
    .then(console.log);
};

module.exports.update_disease = async function (req, res) {
  const disease = req.body.inputDisease.toLowerCase();
  let Doctorlist = await Doctor.find({ disease: disease });
  let a = await Doctorlist.forEach(async function (doctors) {
    let lat2 = await doctors.location.coordinates[1];
    let lon2 = await doctors.location.coordinates[0];
    // let lat1 = await req.body.lat;
    let lat1 =29.948201;
    // let lon1 = await req.body.lon;
    let lon1 =76.815343;
    // while (lat1 < 55) {
    //   console.log("fetching latitude");
    //   lat1 = req.body.lat;
    //   lon1 = req.body.lon;
    // }
    // successfulLookup(lat1, lon1);
    let userdistance = distance(lat1, lat2, lon1, lon2);
    console.log("before distance:", userdistance);

    // console.log(doctors._id);
    console.log(lat1);

    await (doctors.user_distance = userdistance);
    await doctors.save();
    console.log("after distance:", doctors.user_distance);
  });
  setTimeout(function () {}, 30000);
  let Doctors = await Doctor.find({ disease: disease }).sort("user_distance");

  arr = [];
  Doctors.forEach(async function (doctor) {
    // while(doctor.user_distance==0){

    // }
    await arr.push([doctor.name, doctor.user_distance.toFixed(2), doctor._id]);
  });
  res.render("doctor_list", { arr: arr, user: 1 });
  // res.send(arr);
};

// module.exports.update_hospital = async function (req, res) {
//   const hospital = req.body.hospitalname;
//   Doctor.find({ hospitalName: hospital }, async function (err, doctorInfo) {
//     if (err) {
//       console.log(err);
//     } else {
//       doctorInfo.forEach(async function (doctors) {
//         let lat2 = await doctors.location.coordinates[1];
//         let lon2 = await doctors.location.coordinates[0];
//         let lat1 = await req.body.lat;
//         let lon1 = await req.body.lon;
//         // while (lat1 < 55) {
//         //   console.log("fetching latitude");
//         //   lat1 = req.body.lat;
//         //   lon1 = req.body.lon;
//         // }
//         // successfulLookup(lat1, lon1);
//         console.log(distance(lat1, lat2, lon1, lon2));
//         let userdistance = distance(lat1, lat2, lon1, lon2);
//         console.log(doctors._id);
//         console.log(lat1);
//         doctors.user_distance = userdistance;
//         await doctors.save();
//       });
//     }
//   });

//   await Doctor.find({ hospitalName: hospital }, function (err, doctors) {
//     arr = [];
//     doctors.forEach(function (doctor) {
//       // while(doctor.user_distance==0){

//       // }
//       arr.push([doctor.name, doctor.user_distance.toFixed(2), doctor._id]);
//     });
//     res.render("doctor_list", { arr: arr, user: 1 });
//     // res.send(arr);
//   }).sort("user_distance");
// };

module.exports.update_hospital = async function (req, res) {
  const hospital = req.body.hospitalname;
  Doctor.find({ hospitalName: hospital }, async function (err, doctorInfo) {
    if (err) {
      console.log(err);
    } else {
      doctorInfo.forEach(async function (doctors) {
        let lat2 = await doctors.location.coordinates[1];
        let lon2 = await doctors.location.coordinates[0];
        // let lat1 = await req.body.lat;
        let lat1 =29.948201;
        // let lon1 = await req.body.lon;
        let lon1 =76.815343;
        // while (lat1 < 55) {
        //   console.log("fetching latitude");
        //   lat1 = req.body.lat;
        //   lon1 = req.body.lon;
        // }
        // successfulLookup(lat1, lon1);
        console.log(distance(lat1, lat2, lon1, lon2));
        let userdistance = distance(lat1, lat2, lon1, lon2);
        console.log(doctors._id);
        console.log(lat1);
        doctors.user_distance = userdistance;
        await doctors.save();
      });
    }
  });

  await Doctor.find({ hospitalName: hospital }, function (err, doctors) {
    arr = [];
    doctors.forEach(function (doctor) {
      // while(doctor.user_distance==0){

      // }
      arr.push([doctor.name, doctor.user_distance.toFixed(2), doctor._id]);
    });
    res.render("doctor_list", { arr: arr, user: 1 });
    // res.send(arr);
  }).sort("user_distance");
};

module.exports.update_specialization = function (req, res) {
  const specialization = req.body.specialization;
  Doctor.find({ specialization: specialization }, function (err, doctorInfo) {
    if (err) {
      console.log(err);
    } else {
      doctorInfo.forEach(function (doctors) {
        let lat2 = doctors.location.coordinates[1];
        let lon2 = doctors.location.coordinates[0];
          // let lat1 = await req.body.lat;
           let lat1 =29.948201;
          // let lon1 = await req.body.lon;
          let lon1 =76.815343;
        // while (lat1 < 55) {
        //   console.log("fetching latitude");
        //   lat1 = req.body.lat;
        //   lon1 = req.body.lon;
        // }
        // successfulLookup(lat1, lon1);
        console.log(distance(lat1, lat2, lon1, lon2));
        let userdistance = distance(lat1, lat2, lon1, lon2);
        console.log(doctors._id);
        console.log(lat1);
        doctors.user_distance = userdistance;
        doctors.save();
      });
    }
  });

  Doctor.find({ specialization: specialization }, function (err, doctors) {
    arr = [];
    doctors.forEach(function (doctor) {
      // while(doctor.user_distance==0){

      // }
      arr.push([doctor.name, doctor.user_distance.toFixed(2), doctor._id]);
    });
    res.render("doctor_list", { arr: arr, user: 1 });
    // res.send(arr);
  }).sort("user_distance");
};
