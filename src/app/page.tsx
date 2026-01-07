'use client'

export default function MigratingPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      background: 'linear-gradient(135deg, #030A8C 0%, #081C59 100%)',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '600px',
        textAlign: 'center'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: '#F29F05',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 2rem',
          fontSize: '2rem'
        }}>
          🚀
        </div>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          LijohHr
        </h1>
        <p style={{
          fontSize: '1.25rem',
          opacity: 0.9,
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          AI-Powered HR & Payroll Management Platform
        </p>
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '1.5rem',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            marginBottom: '1rem'
          }}>
            🔄 Migration in Progress
          </h2>
          <p style={{
            fontSize: '1rem',
            opacity: 0.85,
            marginBottom: '1rem'
          }}>
            We're migrating from Next.js to Astro for better performance and SEO!
          </p>
          <p style={{
            fontSize: '0.9rem',
            opacity: 0.7
          }}>
            The new Astro landing page is built and ready. The server is restarting...
          </p>
        </div>
      </div>
    </div>
  )
}
