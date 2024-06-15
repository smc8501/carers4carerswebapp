import Link from "next/link";


export default function Home() {
  return (
    <div className="container">
      <div className="text">Report Generation Web Application</div>
      <Link href='/EnterRegistrationFormManually'>Enter Registration Form Manually</Link>
    </div>
  );
}
