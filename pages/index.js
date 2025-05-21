import dotenv from "dotenv";
dotenv.config();

function Home() {
  console.log(process.env.POSTGRES_PASSWORD);
  return <h1>Lívia, eu amo você. Se você me ama, da uma risadinha!</h1>;
}

export default Home;
