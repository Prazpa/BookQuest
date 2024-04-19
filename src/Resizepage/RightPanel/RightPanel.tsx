// RightPanel.tsx

import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface RightPanelProps {
  selectedBook: string | null;
}

const RightPanel: React.FC<RightPanelProps> = ({ selectedBook }) => {
  const [recentlyViewedBooks, setRecentlyViewedBooks] = useState<string[]>([]);

  // Update recently viewed books when selectedBook changes
  useEffect(() => {
    if (selectedBook) {
      setRecentlyViewedBooks(prevBooks => [...prevBooks, selectedBook]);
    }
  }, [selectedBook]);

  return (
    <div>
      <h1>Recently Viewed</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Author</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentlyViewedBooks.map((book, index) => (
            <TableRow key={index}>
              <TableCell>{book}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default RightPanel;
