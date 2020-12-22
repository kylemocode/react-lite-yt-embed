import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { LiteYoutubeEmbed } from '../../dist/index';

describe("<LiteYoutubeEmbed />", () => {
  test("Render properly", async () => {
    const { getByTestId } = render(<LiteYoutubeEmbed id='ZPBWje2kJ_U'/>);
    expect(getByTestId('lite-yt-embed')).toBeInTheDocument();
  });
});