interface AdBannerPlaceholderProps {
  size?: 'leaderboard' | 'rectangle' | 'skyscraper' | 'mobile';
  className?: string;
}

const AdBannerPlaceholder = ({ size = 'leaderboard', className = '' }: AdBannerPlaceholderProps) => {
  const sizeClasses = {
    leaderboard: 'w-full h-24 max-w-3xl', // 728x90
    rectangle: 'w-80 h-64', // 300x250
    skyscraper: 'w-40 h-96', // 160x600
    mobile: 'w-full h-20 max-w-sm', // 320x50
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <div className="w-full h-full bg-muted/50 border border-border rounded-lg flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground text-sm font-medium">Advertisement</p>
          <p className="text-muted-foreground text-xs mt-1">
            {size === 'leaderboard' && '728 x 90'}
            {size === 'rectangle' && '300 x 250'}
            {size === 'skyscraper' && '160 x 600'}
            {size === 'mobile' && '320 x 50'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdBannerPlaceholder;