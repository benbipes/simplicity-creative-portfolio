import Foundation
import PDFKit
import AppKit

let args = CommandLine.arguments
if args.count < 3 {
    print("Usage: render_pdf <pdf_path> <output_png_path>")
    exit(1)
}

let pdfPath = args[1]
let outputPath = args[2]

guard let pdfDoc = PDFDocument(url: URL(fileURLWithPath: pdfPath)),
      let page = pdfDoc.page(at: 0) else {
    print("Failed to load PDF or Page 1 from \(pdfPath)")
    exit(1)
}

let pageRect = page.bounds(for: .mediaBox)
let dpi: CGFloat = 200.0
let scale = dpi / 72.0
let width = Int(pageRect.width * scale)
let height = Int(pageRect.height * scale)

guard let imageRep = NSBitmapImageRep(
    bitmapDataPlanes: nil,
    pixelsWide: width,
    pixelsHigh: height,
    bitsPerSample: 8,
    samplesPerPixel: 4,
    hasAlpha: true,
    isPlanar: false,
    colorSpaceName: .deviceRGB,
    bytesPerRow: width * 4,
    bitsPerPixel: 32) else {
    print("Failed to create bitmap rep")
    exit(1)
}

NSGraphicsContext.saveGraphicsState()
if let context = NSGraphicsContext(bitmapImageRep: imageRep) {
    NSGraphicsContext.current = context
    context.cgContext.setFillColor(NSColor.white.cgColor)
    context.cgContext.fill(CGRect(x: 0, y: 0, width: width, height: height))
    context.cgContext.scaleBy(x: scale, y: scale)
    page.draw(with: .mediaBox, to: context.cgContext)
}
NSGraphicsContext.restoreGraphicsState()

if let pngData = imageRep.representation(using: .png, properties: [:]) {
    try? pngData.write(to: URL(fileURLWithPath: outputPath))
    print("Rendered PNG: \(outputPath)")
}
