// =============================================================================
// 🎵 Music Platform Component - QElements Version
// =============================================================================
// This component demonstrates QElements parent-child styling with music platform UI.
// It shows how child components inherit and override parent styles.
// =============================================================================

import React, { useState } from 'react';
import { QElementComponent } from '../qelements/QElementComponent';

// Music Platform Components
const MusicPlatform = () => {
  const [activeTab, setActiveTab] = useState('discover');
  const [selectedArtist, setSelectedArtist] = useState<any>(null);
  const [userRating, setUserRating] = useState(0);

  const artists = [
    { id: 1, name: 'Luna Eclipse', genre: 'Electronic', followers: '2.3M', rating: 4.8, image: '🎵' },
    { id: 2, name: 'Neon Dreams', genre: 'Synthwave', followers: '1.8M', rating: 4.7, image: '🌙' },
    { id: 3, name: 'Crimson Waves', genre: 'Rock', followers: '3.1M', rating: 4.9, image: '🌊' },
    { id: 4, name: 'Digital Pulse', genre: 'EDM', followers: '4.2M', rating: 4.9, image: '🎧' },
    { id: 5, name: 'Midnight Sonata', genre: 'Classical', followers: '1.5M', rating: 4.6, image: '🎼' },
    { id: 6, name: 'Electric Storm', genre: 'Metal', followers: '2.7M', rating: 4.8, image: '⚡' }
  ];

  const trendingSongs = [
    { title: 'Digital Sunset', artist: 'Luna Eclipse', plays: '12.4M', duration: '3:42' },
    { title: 'Neon Nights', artist: 'Neon Dreams', plays: '8.9M', duration: '4:15' },
    { title: 'Crimson Tide', artist: 'Crimson Waves', plays: '15.2M', duration: '3:28' },
    { title: 'Electric Dreams', artist: 'Digital Pulse', plays: '22.1M', duration: '3:55' }
  ];

  return (
    <QElementComponent 
      elementId="music-platform"
      style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1b1b 50%, #1a1a1a 100%)',
        padding: '2rem',
        color: '#ffffff'
      }}
    >
      {/* Header */}
      <QElementComponent 
        elementId="music-header"
        style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '16px',
          padding: '2rem',
          marginBottom: '2rem',
          border: '1px solid rgba(220, 38, 38, 0.2)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
        }}
      >
        <h2 style={{ 
          fontSize: '2rem', 
          fontWeight: '700', 
          margin: '0 0 1rem 0',
          background: 'linear-gradient(45deg, #ff6b6b, #dc2626)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          🎵 Discover New Music
        </h2>
        <p style={{ 
          color: '#cccccc', 
          fontSize: '1.1rem', 
          margin: '0 0 2rem 0',
          lineHeight: '1.6'
        }}>
          Explore trending artists and discover your next favorite song
        </p>
        
        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          {['discover', 'trending', 'artists'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: activeTab === tab 
                  ? 'linear-gradient(135deg, #dc2626, #ff6b6b)' 
                  : 'rgba(255,255,255,0.1)',
                color: '#ffffff',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                textTransform: 'capitalize'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </QElementComponent>

      {/* Content based on active tab */}
      {activeTab === 'discover' && (
        <div>
          <h3 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '1.5rem',
            color: '#ff6b6b'
          }}>
            Featured Artists
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {artists.map((artist) => (
              <div
                key={artist.id}
                onClick={() => setSelectedArtist(artist)}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid rgba(220, 38, 38, 0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(220, 38, 38, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(220, 38, 38, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ 
                    fontSize: '2.5rem',
                    background: 'linear-gradient(45deg, #dc2626, #ff6b6b)',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {artist.image}
                  </div>
                  <div>
                    <h4 style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: '600', 
                      margin: '0 0 0.25rem 0',
                      color: '#ffffff'
                    }}>
                      {artist.name}
                    </h4>
                    <p style={{ 
                      color: '#cccccc', 
                      margin: '0',
                      fontSize: '0.9rem'
                    }}>
                      {artist.genre} • {artist.followers} followers
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#ff6b6b', fontWeight: '600' }}>
                    ⭐ {artist.rating}
                  </span>
                  <span style={{ color: '#888', fontSize: '0.9rem' }}>
                    Rating
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'trending' && (
        <div>
          <h3 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '1.5rem',
            color: '#ff6b6b'
          }}>
            Trending Songs
          </h3>
          <div style={{ 
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '16px',
            padding: '1.5rem',
            border: '1px solid rgba(220, 38, 38, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            {trendingSongs.map((song, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem 0',
                  borderBottom: index < trendingSongs.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none'
                }}
              >
                <div>
                  <h4 style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: '600', 
                    margin: '0 0 0.25rem 0',
                    color: '#ffffff'
                  }}>
                    {song.title}
                  </h4>
                  <p style={{ 
                    color: '#cccccc', 
                    margin: '0',
                    fontSize: '0.9rem'
                  }}>
                    {song.artist}
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ 
                    color: '#ff6b6b', 
                    margin: '0 0 0.25rem 0',
                    fontWeight: '600'
                  }}>
                    {song.plays} plays
                  </p>
                  <p style={{ 
                    color: '#888', 
                    margin: '0',
                    fontSize: '0.9rem'
                  }}>
                    {song.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'artists' && (
        <div>
          <h3 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '1.5rem',
            color: '#ff6b6b'
          }}>
            All Artists
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1rem' 
          }}>
            {artists.map((artist) => (
              <div
                key={artist.id}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '12px',
                  padding: '1rem',
                  border: '1px solid rgba(220, 38, 38, 0.2)',
                  textAlign: 'center'
                }}
              >
                <div style={{ 
                  fontSize: '3rem',
                  marginBottom: '0.5rem'
                }}>
                  {artist.image}
                </div>
                <h4 style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: '600', 
                  margin: '0 0 0.25rem 0',
                  color: '#ffffff'
                }}>
                  {artist.name}
                </h4>
                <p style={{ 
                  color: '#cccccc', 
                  margin: '0 0 0.5rem 0',
                  fontSize: '0.9rem'
                }}>
                  {artist.genre}
                </p>
                <div style={{ 
                  color: '#ff6b6b', 
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}>
                  ⭐ {artist.rating}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Artist Detail Modal */}
      {selectedArtist && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '2rem'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #1a1a1a, #2d1b1b)',
            borderRadius: '20px',
            padding: '2rem',
            maxWidth: '500px',
            width: '100%',
            border: '2px solid rgba(220, 38, 38, 0.3)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ 
                fontSize: '4rem',
                marginBottom: '1rem'
              }}>
                {selectedArtist.image}
              </div>
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                margin: '0 0 0.5rem 0',
                color: '#ffffff'
              }}>
                {selectedArtist.name}
              </h2>
              <p style={{ 
                color: '#cccccc', 
                fontSize: '1.1rem',
                margin: '0 0 1rem 0'
              }}>
                {selectedArtist.genre} • {selectedArtist.followers} followers
              </p>
              <div style={{ 
                color: '#ff6b6b', 
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                ⭐ {selectedArtist.rating} Rating
              </div>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                color: '#ffffff',
                fontWeight: '600'
              }}>
                Rate this artist:
              </label>
              <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setUserRating(star)}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '2rem',
                      cursor: 'pointer',
                      color: star <= userRating ? '#ff6b6b' : '#666',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    ⭐
                  </button>
                ))}
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => setSelectedArtist(null)}
                style={{
                  flex: 1,
                  background: 'linear-gradient(135deg, #dc2626, #ff6b6b)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </QElementComponent>
  );
};

export default MusicPlatform;