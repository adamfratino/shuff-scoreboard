import { useScoreStore } from "@/stores/score-store";
import type { Frame, Position } from "@/types";
import {
  calculateFrameTotalScore,
  calculateMatchTotalScore,
  sumPositiveScoreCounts,
} from "@/utils";

interface UseScoreDetailsType {
  frame?: Frame;
  position?: Position;
}

export function useScoreDetails({ frame, position }: UseScoreDetailsType) {
  const { player1Score, player2Score } = useScoreStore();

  const scoresArr = [player1Score, player2Score];

  const scoreObj = Object.entries(scoresArr[position!]).find(
    (fr) => Number(fr[0]) === frame
  );
  const oppScoreObj = Object.entries(scoresArr[1 - position!]).find(
    (fr) => Number(fr[0]) === frame
  );

  const frameData = scoreObj ? scoreObj[1] : undefined;
  const oppFrameData = scoreObj ? oppScoreObj![1] : undefined;

  const frameScore = frameData
    ? calculateFrameTotalScore(frameData)
    : undefined;
  const oppFrameScore = frameData
    ? calculateFrameTotalScore(oppFrameData!)
    : undefined;
  const totalScore = calculateMatchTotalScore(scoresArr[position!], frame);

  const previousFrame = frame! - 1;

  const previousTotalScore =
    previousFrame > 0
      ? calculateMatchTotalScore(scoresArr[position!], previousFrame)
      : 0;

  const oppPreviousTotalScore =
    previousFrame > 0
      ? calculateMatchTotalScore(scoresArr[1 - position!], previousFrame)
      : 0;

  const scoreChanged = totalScore !== previousTotalScore;

  const tenPointCount = frameData ? frameData[10] || 0 : 0;
  const minusTenPointCount = frameData ? frameData["-10"] || 0 : 0;

  const isWinner = frameScore! > oppFrameScore!;
  const isPepperoni = sumPositiveScoreCounts(frameData) === 4;
  const isUnchangedScore = previousFrame > 0 && scoreObj && !scoreChanged;

  const getScoreForPosition = (pos: Position) => {
    const scoreObj = Object.entries(scoresArr[pos]).find(
      (fr) => Number(fr[0]) === frame
    );
    const frameData = scoreObj ? scoreObj[1] : undefined;
    return frameData ? calculateFrameTotalScore(frameData) : 0;
  };

  const position0Score = getScoreForPosition(0);
  const position1Score = getScoreForPosition(1);
  const positionScores = [position0Score, position1Score];

  const doesPositionWin = (pos: Position): boolean => {
    return positionScores[pos] > positionScores[1 - pos];
  };

  return {
    /** an array of player and opponent scores */
    scoresArr,
    /** score object of the provided frame */
    scoreObj,
    frameData,
    frameScore,
    oppScoreObj,
    oppFrameData,
    oppFrameScore,
    totalScore,
    /** true if player score is greater than opponent score */
    isWinner,
    /** subtracts one from the current frame */
    previousFrame,
    /** player's previous score  */
    previousTotalScore,
    /** opponents's previous score  */
    oppPreviousTotalScore,
    /** true if all 4 discs have a positive score */
    isPepperoni,
    /** check if the score has changed */
    scoreChanged,
    isUnchangedScore,
    /** the amount of tens scored */
    tenPointCount,
    /** the amount of kitchens scored */
    minusTenPointCount,
    /** Function to check if a given position wins over the other */
    doesPositionWin,
  };
}
