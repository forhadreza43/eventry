"use client";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);
    if (query.trim() !== "") {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
      defaultValue={searchParams.get("query")?.toString()}
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
    />
  );
}
