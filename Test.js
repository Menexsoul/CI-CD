const { isEven } = require("./isEven");
const result = isEven(40);
if (result === true) {
  console.log("✔ Test réussi : 40 est bien pair");
  process.exit(0);
} else {
  console.error("❌ Test échoué : fonction incorrecte");
  process.exit(1);
}
