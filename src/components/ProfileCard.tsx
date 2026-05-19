import type { ProfileData } from "@/types/profile";

interface ProfileCardProps {
  data: ProfileData;
}

/**
 * ProfileCard Component
 * Exibe a imagem de perfil em moldura redonda com efeito de glow
 * Reutilizável e preparado para consumir dados do backend
 */
export const ProfileCard = ({ data }: ProfileCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Glow effect background */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
        {/* Animated glow layer */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-30 blur-2xl animate-glow-pulse" />

        {/* Profile image container */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 p-1">
          {/* Inner border */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/60 bg-gradient-to-br from-primary/10 to-transparent">
            {/* Image */}
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Profile info */}
      <div className="mt-8 text-center space-y-2 animate-fade-up" style={{ animationDelay: "200ms" }}>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          {data.name}
        </h2>
        <p className="text-base sm:text-lg text-primary font-medium">
          {data.title}
        </p>
        {data.bio && (
          <p className="text-sm sm:text-base text-muted-foreground max-w-md">
            {data.bio}
          </p>
        )}
      </div>
    </div>
  );
};
