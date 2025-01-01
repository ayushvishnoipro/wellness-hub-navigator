import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SearchBar() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="search"
          placeholder="Search patients, communities, or health topics..."
          className="w-full pl-10 pr-4 py-2 rounded-full border-gray-200 focus:border-primary focus:ring-primary"
        />
      </div>
      <div className="flex gap-4">
        <Select>
          <SelectTrigger className="w-[200px]">
            <MapPin className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Select Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ny">New York</SelectItem>
            <SelectItem value="sf">San Francisco</SelectItem>
            <SelectItem value="ch">Chicago</SelectItem>
            <SelectItem value="au">Austin</SelectItem>
            <SelectItem value="global">Global</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Community Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="condition">Condition-Specific</SelectItem>
            <SelectItem value="local">Local Groups</SelectItem>
            <SelectItem value="wellness">Wellness & Fitness</SelectItem>
            <SelectItem value="support">Support Groups</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}