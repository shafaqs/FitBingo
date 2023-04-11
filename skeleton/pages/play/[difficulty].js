import Board from '@/modules/bingo';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import {useRouter} from 'next/router'
import { PrismaClient } from '@prisma/client';
import {
  Grid,
  Button,
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

//import BingoBoard from '@/components/BingoBoard';

const inter = Inter({ subsets: ['latin'] });

export default function BingoBoard({ blogs }) {
  return (
    <div>
      <Board></Board>

    </div>
  );
}
