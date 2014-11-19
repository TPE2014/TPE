var who = "world";

exports.setUp = function(ctx, font, align, baseline, color)
{
ctx.font = font;
ctx.textAlign = align;
ctx.textBaseline = baseline;
ctx.fillStyle = color;
}
exports.drawText = function(ctx, text, x, y)
{
	ctx.fillText(text, x, y);
}
