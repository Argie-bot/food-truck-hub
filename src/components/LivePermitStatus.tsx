'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefreshCw, Clock, CheckCircle, AlertCircle, XCircle } from "lucide-react";

interface PermitStatus {
  city: string;
  status: 'available' | 'processing' | 'closed';
  lastUpdated: string;
  message: string;
  source: string;
}

interface LivePermitStatusProps {
  cityName: string;
}

export function LivePermitStatus({ cityName }: LivePermitStatusProps) {
  const [status, setStatus] = useState<PermitStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStatus = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`/api/permits?city=${encodeURIComponent(cityName)}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch permit status');
      }
      
      const data = await response.json();
      setStatus(data);
    } catch (err) {
      setError('Unable to check permit status');
      console.error('Error fetching permit status:', err);
    } finally {
      setLoading(false);
    }
  }, [cityName]);

  useEffect(() => {
    fetchStatus();
    
    // Auto-refresh every 5 minutes
    const interval = setInterval(fetchStatus, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [cityName, fetchStatus]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500';
      case 'processing': return 'bg-yellow-500';
      case 'closed': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available': return <CheckCircle className="h-4 w-4" />;
      case 'processing': return <Clock className="h-4 w-4" />;
      case 'closed': return <XCircle className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return 'Available Now';
      case 'processing': return 'Processing';
      case 'closed': return 'Closed';
      default: return 'Unknown';
    }
  };

  if (loading && !status) {
    return (
      <Card className="border-orange-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <RefreshCw className="h-5 w-5 animate-spin" />
            Checking Live Status...
          </CardTitle>
        </CardHeader>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="border-red-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            Status Check Failed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-600 text-sm mb-3">{error}</p>
          <Button 
            onClick={fetchStatus}
            size="sm"
            variant="outline"
            className="border-red-200"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!status) return null;

  return (
    <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <span className="text-orange-600">🔴 LIVE</span>
          Permit Status
          <Button
            onClick={fetchStatus}
            size="sm"
            variant="ghost"
            disabled={loading}
            className="ml-auto h-8 w-8 p-0"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge 
            className={`${getStatusColor(status.status)} text-white flex items-center gap-1`}
          >
            {getStatusIcon(status.status)}
            {getStatusText(status.status)}
          </Badge>
          <span className="text-sm text-gray-600">
            Updated {new Date(status.lastUpdated).toLocaleTimeString()}
          </span>
        </div>
        
        <p className="text-gray-700">{status.message}</p>
        
        <div className="text-xs text-gray-500 border-t pt-2">
          Source: {status.source}
        </div>
      </CardContent>
    </Card>
  );
}