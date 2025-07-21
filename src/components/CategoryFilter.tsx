import { Badge } from '@/components/ui/badge';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Badge
        variant={!selectedCategory ? "default" : "secondary"}
        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
        onClick={() => onCategoryChange('')}
      >
        All
      </Badge>
      {categories.map(category => (
        <Badge
          key={category}
          variant={selectedCategory === category ? "default" : "secondary"}
          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
          onClick={() => onCategoryChange(selectedCategory === category ? '' : category)}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
};

export default CategoryFilter;