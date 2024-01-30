import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Ekta Sharma</p>
      <Link href="https://github.com/ekta-07070/cprg306-assignments.git">
        Link to your GitHub repository
      </Link>
    </div>
  );
}