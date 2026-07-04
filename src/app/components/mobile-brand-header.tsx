export function MobileBrandHeader() {
  return (
    <div className="lg:hidden w-full p-6 flex items-center justify-between border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, var(--aurora-amber), var(--aurora-gold))',
            boxShadow: '0 4px 20px rgba(200, 134, 10, 0.3)',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="5" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="7.05" y2="7.05" />
            <line x1="16.95" y1="16.95" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="5" y2="12" />
            <line x1="19" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="7.05" y2="16.95" />
            <line x1="16.95" y1="7.05" x2="19.78" y2="4.22" />
          </svg>
        </div>
        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 700, color: '#1a1a1a' }}>
          Haven
        </span>
      </div>

      <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(0, 0, 0, 0.5)' }}>
        Church Management, Simplified
      </p>
    </div>
  );
}
