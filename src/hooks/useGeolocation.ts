import { useState, useCallback } from 'react';

interface GeoLocationState {
  latitude: number | null;
  longitude: number | null;
  mapsUrl: string | null;
  error: string | null;
  loading: boolean;
}

/**
 * Custom hook to safely detect customer's current GPS location coordinates
 * and build a direct Google Maps navigation URL.
 */
export function useGeolocation() {
  const [state, setState] = useState<GeoLocationState>({
    latitude: null,
    longitude: null,
    mapsUrl: null,
    error: null,
    loading: false,
  });

  const getPosition = useCallback((): Promise<{ lat: number; lng: number; url: string }> => {
    setState((s) => ({ ...s, loading: true, error: null }));

    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        const errMsg = 'Geolocation is not supported by your browser.';
        setState({
          latitude: null,
          longitude: null,
          mapsUrl: null,
          error: errMsg,
          loading: false,
        });
        reject(new Error(errMsg));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const url = `https://www.google.com/maps?q=${lat},${lng}`;

          setState({
            latitude: lat,
            longitude: lng,
            mapsUrl: url,
            error: null,
            loading: false,
          });

          resolve({ lat, lng, url });
        },
        (error) => {
          const errMsg =
            error.code === error.PERMISSION_DENIED
              ? 'Location permission denied. Please enter your street landmark manually.'
              : 'Could not fetch current GPS location.';

          setState({
            latitude: null,
            longitude: null,
            mapsUrl: null,
            error: errMsg,
            loading: false,
          });

          reject(new Error(errMsg));
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 30000,
        }
      );
    });
  }, []);

  return {
    ...state,
    getPosition,
  };
}
