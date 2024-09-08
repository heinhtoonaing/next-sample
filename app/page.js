// app/page.js
export default function Page({ searchParams }) {
  // Log searchParams to see its structure
  console.debug({ searchParams });

  // Retrieve the 'name' query parameter or default to 'World'
  const name = searchParams.name || 'World';

  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
}
  