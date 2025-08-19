import { Button } from "@/components/ui/button";

export function KakaoLoginButton() {
  return (
    <Button variant="outline" className="w-full gap-2 bg-[#FEE500] hover:bg-[#ecd800] text-[#000000] h-12">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3C6.48 3 2 6.97 2 11.5c0 2.97 2.07 5.58 5.18 7.03-.23.84-.83 3.02-.95 3.53-.15.66.24.65.5.47.21-.14 3.34-2.28 4.7-3.2.84.12 1.71.18 2.57.18 5.52 0 10-3.97 10-8.5S17.52 3 12 3z" />
      </svg>
      카카오로 로그인
    </Button>
  );
}
